/**
 * @file parse svg to vdom
 * @desc modify from vdom-parser
 */

// https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType

import { VNode, VText } from 'virtual-dom'
import SVGAttributeNamespace, { DEFAULT_NAMESPACE } from './svg-attribute-namespace'
import attributeHook from './hooks/attribute-hook'

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml'

function createVirtualTextNode(el) {
  return new VText(el.nodeValue)
}

function createProperties(el) {
  const properties = {
    namespace: SVG_NAMESPACE,
    attributes: {}
  }

  const attributes = properties.attributes
  /* eslint-disable */
  const eleAttrs = el.attributes
  for (let i = 0; i < eleAttrs && eleAttrs.length; i += 1) {
    const attr = eleAttrs[i]
    const attrName = attr.name
    const attrValue = attr.value
    const namespace = SVGAttributeNamespace(attrName)
    if (namespace === undefined) { // not svg attribute
      continue
    }
    if (
      typeof attrValue !== 'string'
      && typeof attrValue !== 'number'
      && typeof attrValue !== 'boolean'
    ) {
      continue
    }

    if (namespace !== DEFAULT_NAMESPACE) {
      properties.namespace = attributeHook(namespace, attrValue)
      continue
    }
    attributes[attrName] = attrValue
  }

  return properties
}

function createChildren(el, rules, attr) {
  const children = []
  for (let i = 0; i < el.childNodes.length; i += 1) {
    children.push(createNode(el.childNodes[i], rules, attr))
  }

  return children
}

function createVirtualDomNode(el, rules, attr) {
  const ns = el.namespaceURI !== HTML_NAMESPACE ? el.namespaceURI : null
  const key = attr && el.getAttribute(attr) ? el.getAttribute(attr) : null

  rules.forEach(rule => rule && rule(el))

  return new VNode(
    el.tagName
    , createProperties(el)
    , createChildren(el, rules, attr)
    , key
    , ns
  )
}

function createNode(el, rules, attr) {
  if (el.nodeType === Node.TEXT_NODE) {
    return createVirtualTextNode(el)
  } else if (
    el.nodeType === Node.ELEMENT_NODE
    || el.nodeType === Node.DOCUMENT_NODE
  ) {
    return createVirtualDomNode(el, rules, attr)
  }
  return new VText('')
}

let domParser

export default function parser(el, rules = [], attr) {
  let svgEl = el
  if (!el) {
    return createNode(document.createTextNode(''), rules)
  }
  if (typeof el === 'string') {
    if (!('DOMParser' in window)) {
      throw new Error('DOMParser is not available.')
    }
    domParser = domParser || new DOMParser()
    svgEl = domParser.parseFromString(el, 'image/svg+xml')
  }
  if (typeof svgEl !== 'object' || !svgEl || !svgEl.nodeType) {
    throw new Error('invalid dom node', el)
  }
  return createNode(svgEl, rules, attr)
}
