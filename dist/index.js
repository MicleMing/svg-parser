'use strict';

var virtualDom = require('virtual-dom');

/**
 * @file svg attribute namespace
 * @desc https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/svg-attribute-namespace.js
 */

const DEFAULT_NAMESPACE = null;
const EV_NAMESPACE = 'http://www.w3.org/2001/xml-events';
const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';
const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';

// http://www.w3.org/TR/SVGTiny12/attributeTable.html
// http://www.w3.org/TR/SVG/attindex.html

const SVG_PROPERTIES = {
  about: DEFAULT_NAMESPACE,
  'accent-height': DEFAULT_NAMESPACE,
  accumulate: DEFAULT_NAMESPACE,
  additive: DEFAULT_NAMESPACE,
  'alignment-baseline': DEFAULT_NAMESPACE,
  alphabetic: DEFAULT_NAMESPACE,
  amplitude: DEFAULT_NAMESPACE,
  'arabic-form': DEFAULT_NAMESPACE,
  ascent: DEFAULT_NAMESPACE,
  attributeName: DEFAULT_NAMESPACE,
  attributeType: DEFAULT_NAMESPACE,
  azimuth: DEFAULT_NAMESPACE,
  bandwidth: DEFAULT_NAMESPACE,
  baseFrequency: DEFAULT_NAMESPACE,
  baseProfile: DEFAULT_NAMESPACE,
  'baseline-shift': DEFAULT_NAMESPACE,
  bbox: DEFAULT_NAMESPACE,
  begin: DEFAULT_NAMESPACE,
  bias: DEFAULT_NAMESPACE,
  by: DEFAULT_NAMESPACE,
  calcMode: DEFAULT_NAMESPACE,
  'cap-height': DEFAULT_NAMESPACE,
  class: DEFAULT_NAMESPACE,
  clip: DEFAULT_NAMESPACE,
  'clip-path': DEFAULT_NAMESPACE,
  'clip-rule': DEFAULT_NAMESPACE,
  clipPathUnits: DEFAULT_NAMESPACE,
  color: DEFAULT_NAMESPACE,
  'color-interpolation': DEFAULT_NAMESPACE,
  'color-interpolation-filters': DEFAULT_NAMESPACE,
  'color-profile': DEFAULT_NAMESPACE,
  'color-rendering': DEFAULT_NAMESPACE,
  content: DEFAULT_NAMESPACE,
  contentScriptType: DEFAULT_NAMESPACE,
  contentStyleType: DEFAULT_NAMESPACE,
  cursor: DEFAULT_NAMESPACE,
  cx: DEFAULT_NAMESPACE,
  cy: DEFAULT_NAMESPACE,
  d: DEFAULT_NAMESPACE,
  datatype: DEFAULT_NAMESPACE,
  defaultAction: DEFAULT_NAMESPACE,
  descent: DEFAULT_NAMESPACE,
  diffuseConstant: DEFAULT_NAMESPACE,
  direction: DEFAULT_NAMESPACE,
  display: DEFAULT_NAMESPACE,
  divisor: DEFAULT_NAMESPACE,
  'dominant-baseline': DEFAULT_NAMESPACE,
  dur: DEFAULT_NAMESPACE,
  dx: DEFAULT_NAMESPACE,
  dy: DEFAULT_NAMESPACE,
  edgeMode: DEFAULT_NAMESPACE,
  editable: DEFAULT_NAMESPACE,
  elevation: DEFAULT_NAMESPACE,
  'enable-background': DEFAULT_NAMESPACE,
  end: DEFAULT_NAMESPACE,
  'ev:event': EV_NAMESPACE,
  event: DEFAULT_NAMESPACE,
  exponent: DEFAULT_NAMESPACE,
  externalResourcesRequired: DEFAULT_NAMESPACE,
  fill: DEFAULT_NAMESPACE,
  'fill-opacity': DEFAULT_NAMESPACE,
  'fill-rule': DEFAULT_NAMESPACE,
  filter: DEFAULT_NAMESPACE,
  filterRes: DEFAULT_NAMESPACE,
  filterUnits: DEFAULT_NAMESPACE,
  'flood-color': DEFAULT_NAMESPACE,
  'flood-opacity': DEFAULT_NAMESPACE,
  focusHighlight: DEFAULT_NAMESPACE,
  focusable: DEFAULT_NAMESPACE,
  'font-family': DEFAULT_NAMESPACE,
  'font-size': DEFAULT_NAMESPACE,
  'font-size-adjust': DEFAULT_NAMESPACE,
  'font-stretch': DEFAULT_NAMESPACE,
  'font-style': DEFAULT_NAMESPACE,
  'font-variant': DEFAULT_NAMESPACE,
  'font-weight': DEFAULT_NAMESPACE,
  format: DEFAULT_NAMESPACE,
  from: DEFAULT_NAMESPACE,
  fx: DEFAULT_NAMESPACE,
  fy: DEFAULT_NAMESPACE,
  g1: DEFAULT_NAMESPACE,
  g2: DEFAULT_NAMESPACE,
  'glyph-name': DEFAULT_NAMESPACE,
  'glyph-orientation-horizontal': DEFAULT_NAMESPACE,
  'glyph-orientation-vertical': DEFAULT_NAMESPACE,
  glyphRef: DEFAULT_NAMESPACE,
  gradientTransform: DEFAULT_NAMESPACE,
  gradientUnits: DEFAULT_NAMESPACE,
  handler: DEFAULT_NAMESPACE,
  hanging: DEFAULT_NAMESPACE,
  height: DEFAULT_NAMESPACE,
  'horiz-adv-x': DEFAULT_NAMESPACE,
  'horiz-origin-x': DEFAULT_NAMESPACE,
  'horiz-origin-y': DEFAULT_NAMESPACE,
  id: DEFAULT_NAMESPACE,
  ideographic: DEFAULT_NAMESPACE,
  'image-rendering': DEFAULT_NAMESPACE,
  in: DEFAULT_NAMESPACE,
  in2: DEFAULT_NAMESPACE,
  initialVisibility: DEFAULT_NAMESPACE,
  intercept: DEFAULT_NAMESPACE,
  k: DEFAULT_NAMESPACE,
  k1: DEFAULT_NAMESPACE,
  k2: DEFAULT_NAMESPACE,
  k3: DEFAULT_NAMESPACE,
  k4: DEFAULT_NAMESPACE,
  kernelMatrix: DEFAULT_NAMESPACE,
  kernelUnitLength: DEFAULT_NAMESPACE,
  kerning: DEFAULT_NAMESPACE,
  keyPoints: DEFAULT_NAMESPACE,
  keySplines: DEFAULT_NAMESPACE,
  keyTimes: DEFAULT_NAMESPACE,
  lang: DEFAULT_NAMESPACE,
  lengthAdjust: DEFAULT_NAMESPACE,
  'letter-spacing': DEFAULT_NAMESPACE,
  'lighting-color': DEFAULT_NAMESPACE,
  limitingConeAngle: DEFAULT_NAMESPACE,
  local: DEFAULT_NAMESPACE,
  'marker-end': DEFAULT_NAMESPACE,
  'marker-mid': DEFAULT_NAMESPACE,
  'marker-start': DEFAULT_NAMESPACE,
  markerHeight: DEFAULT_NAMESPACE,
  markerUnits: DEFAULT_NAMESPACE,
  markerWidth: DEFAULT_NAMESPACE,
  mask: DEFAULT_NAMESPACE,
  maskContentUnits: DEFAULT_NAMESPACE,
  maskUnits: DEFAULT_NAMESPACE,
  mathematical: DEFAULT_NAMESPACE,
  max: DEFAULT_NAMESPACE,
  media: DEFAULT_NAMESPACE,
  mediaCharacterEncoding: DEFAULT_NAMESPACE,
  mediaContentEncodings: DEFAULT_NAMESPACE,
  mediaSize: DEFAULT_NAMESPACE,
  mediaTime: DEFAULT_NAMESPACE,
  method: DEFAULT_NAMESPACE,
  min: DEFAULT_NAMESPACE,
  mode: DEFAULT_NAMESPACE,
  name: DEFAULT_NAMESPACE,
  'nav-down': DEFAULT_NAMESPACE,
  'nav-down-left': DEFAULT_NAMESPACE,
  'nav-down-right': DEFAULT_NAMESPACE,
  'nav-left': DEFAULT_NAMESPACE,
  'nav-next': DEFAULT_NAMESPACE,
  'nav-prev': DEFAULT_NAMESPACE,
  'nav-right': DEFAULT_NAMESPACE,
  'nav-up': DEFAULT_NAMESPACE,
  'nav-up-left': DEFAULT_NAMESPACE,
  'nav-up-right': DEFAULT_NAMESPACE,
  numOctaves: DEFAULT_NAMESPACE,
  observer: DEFAULT_NAMESPACE,
  offset: DEFAULT_NAMESPACE,
  opacity: DEFAULT_NAMESPACE,
  operator: DEFAULT_NAMESPACE,
  order: DEFAULT_NAMESPACE,
  orient: DEFAULT_NAMESPACE,
  orientation: DEFAULT_NAMESPACE,
  origin: DEFAULT_NAMESPACE,
  overflow: DEFAULT_NAMESPACE,
  overlay: DEFAULT_NAMESPACE,
  'overline-position': DEFAULT_NAMESPACE,
  'overline-thickness': DEFAULT_NAMESPACE,
  'panose-1': DEFAULT_NAMESPACE,
  path: DEFAULT_NAMESPACE,
  pathLength: DEFAULT_NAMESPACE,
  patternContentUnits: DEFAULT_NAMESPACE,
  patternTransform: DEFAULT_NAMESPACE,
  patternUnits: DEFAULT_NAMESPACE,
  phase: DEFAULT_NAMESPACE,
  playbackOrder: DEFAULT_NAMESPACE,
  'pointer-events': DEFAULT_NAMESPACE,
  points: DEFAULT_NAMESPACE,
  pointsAtX: DEFAULT_NAMESPACE,
  pointsAtY: DEFAULT_NAMESPACE,
  pointsAtZ: DEFAULT_NAMESPACE,
  preserveAlpha: DEFAULT_NAMESPACE,
  preserveAspectRatio: DEFAULT_NAMESPACE,
  primitiveUnits: DEFAULT_NAMESPACE,
  propagate: DEFAULT_NAMESPACE,
  property: DEFAULT_NAMESPACE,
  r: DEFAULT_NAMESPACE,
  radius: DEFAULT_NAMESPACE,
  refX: DEFAULT_NAMESPACE,
  refY: DEFAULT_NAMESPACE,
  rel: DEFAULT_NAMESPACE,
  'rendering-intent': DEFAULT_NAMESPACE,
  repeatCount: DEFAULT_NAMESPACE,
  repeatDur: DEFAULT_NAMESPACE,
  requiredExtensions: DEFAULT_NAMESPACE,
  requiredFeatures: DEFAULT_NAMESPACE,
  requiredFonts: DEFAULT_NAMESPACE,
  requiredFormats: DEFAULT_NAMESPACE,
  resource: DEFAULT_NAMESPACE,
  restart: DEFAULT_NAMESPACE,
  result: DEFAULT_NAMESPACE,
  rev: DEFAULT_NAMESPACE,
  role: DEFAULT_NAMESPACE,
  rotate: DEFAULT_NAMESPACE,
  rx: DEFAULT_NAMESPACE,
  ry: DEFAULT_NAMESPACE,
  scale: DEFAULT_NAMESPACE,
  seed: DEFAULT_NAMESPACE,
  'shape-rendering': DEFAULT_NAMESPACE,
  slope: DEFAULT_NAMESPACE,
  snapshotTime: DEFAULT_NAMESPACE,
  spacing: DEFAULT_NAMESPACE,
  specularConstant: DEFAULT_NAMESPACE,
  specularExponent: DEFAULT_NAMESPACE,
  spreadMethod: DEFAULT_NAMESPACE,
  startOffset: DEFAULT_NAMESPACE,
  stdDeviation: DEFAULT_NAMESPACE,
  stemh: DEFAULT_NAMESPACE,
  stemv: DEFAULT_NAMESPACE,
  stitchTiles: DEFAULT_NAMESPACE,
  'stop-color': DEFAULT_NAMESPACE,
  'stop-opacity': DEFAULT_NAMESPACE,
  'strikethrough-position': DEFAULT_NAMESPACE,
  'strikethrough-thickness': DEFAULT_NAMESPACE,
  string: DEFAULT_NAMESPACE,
  stroke: DEFAULT_NAMESPACE,
  'stroke-dasharray': DEFAULT_NAMESPACE,
  'stroke-dashoffset': DEFAULT_NAMESPACE,
  'stroke-linecap': DEFAULT_NAMESPACE,
  'stroke-linejoin': DEFAULT_NAMESPACE,
  'stroke-miterlimit': DEFAULT_NAMESPACE,
  'stroke-opacity': DEFAULT_NAMESPACE,
  'stroke-width': DEFAULT_NAMESPACE,
  surfaceScale: DEFAULT_NAMESPACE,
  syncBehavior: DEFAULT_NAMESPACE,
  syncBehaviorDefault: DEFAULT_NAMESPACE,
  syncMaster: DEFAULT_NAMESPACE,
  syncTolerance: DEFAULT_NAMESPACE,
  syncToleranceDefault: DEFAULT_NAMESPACE,
  systemLanguage: DEFAULT_NAMESPACE,
  tableValues: DEFAULT_NAMESPACE,
  target: DEFAULT_NAMESPACE,
  targetX: DEFAULT_NAMESPACE,
  targetY: DEFAULT_NAMESPACE,
  'text-anchor': DEFAULT_NAMESPACE,
  'text-decoration': DEFAULT_NAMESPACE,
  'text-rendering': DEFAULT_NAMESPACE,
  textLength: DEFAULT_NAMESPACE,
  timelineBegin: DEFAULT_NAMESPACE,
  title: DEFAULT_NAMESPACE,
  to: DEFAULT_NAMESPACE,
  transform: DEFAULT_NAMESPACE,
  transformBehavior: DEFAULT_NAMESPACE,
  type: DEFAULT_NAMESPACE,
  typeof: DEFAULT_NAMESPACE,
  u1: DEFAULT_NAMESPACE,
  u2: DEFAULT_NAMESPACE,
  'underline-position': DEFAULT_NAMESPACE,
  'underline-thickness': DEFAULT_NAMESPACE,
  unicode: DEFAULT_NAMESPACE,
  'unicode-bidi': DEFAULT_NAMESPACE,
  'unicode-range': DEFAULT_NAMESPACE,
  'units-per-em': DEFAULT_NAMESPACE,
  'v-alphabetic': DEFAULT_NAMESPACE,
  'v-hanging': DEFAULT_NAMESPACE,
  'v-ideographic': DEFAULT_NAMESPACE,
  'v-mathematical': DEFAULT_NAMESPACE,
  values: DEFAULT_NAMESPACE,
  version: DEFAULT_NAMESPACE,
  'vert-adv-y': DEFAULT_NAMESPACE,
  'vert-origin-x': DEFAULT_NAMESPACE,
  'vert-origin-y': DEFAULT_NAMESPACE,
  viewBox: DEFAULT_NAMESPACE,
  viewTarget: DEFAULT_NAMESPACE,
  visibility: DEFAULT_NAMESPACE,
  width: DEFAULT_NAMESPACE,
  widths: DEFAULT_NAMESPACE,
  'word-spacing': DEFAULT_NAMESPACE,
  'writing-mode': DEFAULT_NAMESPACE,
  x: DEFAULT_NAMESPACE,
  'x-height': DEFAULT_NAMESPACE,
  x1: DEFAULT_NAMESPACE,
  x2: DEFAULT_NAMESPACE,
  xChannelSelector: DEFAULT_NAMESPACE,
  'xlink:actuate': XLINK_NAMESPACE,
  'xlink:arcrole': XLINK_NAMESPACE,
  'xlink:href': XLINK_NAMESPACE,
  'xlink:role': XLINK_NAMESPACE,
  'xlink:show': XLINK_NAMESPACE,
  'xlink:title': XLINK_NAMESPACE,
  'xlink:type': XLINK_NAMESPACE,
  'xml:base': XML_NAMESPACE,
  'xml:id': XML_NAMESPACE,
  'xml:lang': XML_NAMESPACE,
  'xml:space': XML_NAMESPACE,
  y: DEFAULT_NAMESPACE,
  y1: DEFAULT_NAMESPACE,
  y2: DEFAULT_NAMESPACE,
  yChannelSelector: DEFAULT_NAMESPACE,
  z: DEFAULT_NAMESPACE,
  zoomAndPan: DEFAULT_NAMESPACE
};

function SVGAttributeNamespace(value) {
  if (Object.prototype.hasOwnProperty.call(SVG_PROPERTIES, value)) {
    return SVG_PROPERTIES[value]
  }
}

/**
 * @file attr hook
 * @decs https://github.com/Matt-Esch/virtual-dom/blob/master/virtual-hyperscript/hooks/attribute-hook.js
 */

function AttributeHook(namespace, value) {
  if (!(this instanceof AttributeHook)) {
    return new AttributeHook(namespace, value)
  }

  this.namespace = namespace;
  this.value = value;
}

AttributeHook.prototype.hook = function (node, prop, prev) {
  if (prev && prev.type === 'AttributeHook' &&
        prev.value === this.value &&
        prev.namespace === this.namespace) {
    return
  }

  node.setAttributeNS(this.namespace, prop, this.value);
};

AttributeHook.prototype.unhook = function (node, prop, next) {
  if (next && next.type === 'AttributeHook' &&
        next.namespace === this.namespace
    ) {
    return
  }

  const colonPosition = prop.indexOf(':');
  const localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
  node.removeAttributeNS(this.namespace, localName);
};

AttributeHook.prototype.type = 'AttributeHook';

/**
 * @file parse svg to vdom
 * @desc modify from vdom-parser
 */

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';

function createVirtualTextNode(el) {
  return new virtualDom.VText(el.nodeValue)
}

function createProperties(el) {
  const properties = {
    namespace: SVG_NAMESPACE,
    attributes: {}
  };

  const attributes = properties.attributes;
  /* eslint-disable */
  const eleAttrs = el.attributes;
  for (let i = 0; i < eleAttrs && eleAttrs.length; i += 1) {
    const attr = eleAttrs[i];
    const attrName = attr.name;
    const attrValue = attr.value;
    const namespace = SVGAttributeNamespace(attrName);
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
      properties.namespace = AttributeHook(namespace, attrValue);
      continue
    }
    attributes[attrName] = attrValue;
  }

  return properties
}

function createChildren(el, rules, attr) {
  const children = [];
  for (let i = 0; i < el.childNodes.length; i += 1) {
    children.push(createNode(el.childNodes[i], rules, attr));
  }

  return children
}

function createVirtualDomNode(el, rules, attr) {
  const ns = el.namespaceURI !== HTML_NAMESPACE ? el.namespaceURI : null;
  const key = attr && el.getAttribute(attr) ? el.getAttribute(attr) : null;

  rules.forEach(rule => rule && rule(el));

  return new virtualDom.VNode(
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
  return new virtualDom.VText('')
}

let domParser;

function parser(el, rules = [], attr) {
  let svgEl = el;
  if (!el) {
    return createNode(document.createTextNode(''), rules)
  }
  if (typeof el === 'string') {
    if (!('DOMParser' in window)) {
      throw new Error('DOMParser is not available.')
    }
    domParser = domParser || new DOMParser();
    svgEl = domParser.parseFromString(el, 'image/svg+xml');
  }
  if (typeof svgEl !== 'object' || !svgEl || !svgEl.nodeType) {
    throw new Error('invalid dom node', el)
  }
  return createNode(svgEl, rules, attr)
}

module.exports = parser;
