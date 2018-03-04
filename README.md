# svg parser

parse svg to vdom

```
import parser from 'svg-parser'

const setAttrsForText = (el) => {
  const tagName = el.tagName || ''
  if (tagName.toLowerCase() === 'text') {
    el.setAttribute('id', 'text')
  }
}
const rules = [setAttrsForText]
const vSvg = parser(svg, rules)
```
