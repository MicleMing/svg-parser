import fs from 'fs'
import { VNode } from 'virtual-dom'
import { expect } from 'chai'
import parser from '../src/index'

const svgStr = fs.readFileSync('./test/demo.svg', { encoding: 'utf8' })

function walk(vnode, fn) {
  fn(vnode)
  const children = vnode.children || []
  children.forEach(v => walk(v, fn))
}

describe('svg parser test suit', () => {
  it('parser svg to vnode', () => {
    const v = parser(svgStr, [])
    expect(v instanceof VNode).to.be.true
  })

  it('add rule to parser', () => {
    let index = 0
    function addClassForTagG(el) {
      const tagName = el.tagName || ''
      if (tagName.toLowerCase() === 'g') {
        el.setAttribute('class', 'tests')
      }
    }
    const v = parser(svgStr, [addClassForTagG])
    const gList = []
    walk(v, (vnode) => {
      if (vnode.tagName === 'g') {
        gList.push(vnode)
      }
    })
    expect(gList.every(g => g.properties.attributes.class === 'tests')).to.be.true
  })
})
