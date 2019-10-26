# SORD
Microscopic replacement for `document.querySelector` and `document.querySelectorAll`.

Only 182 bytes minified.

### Install
In Node.js:
`npm i sord`

In the browser:
```html
<script>function s(a,b,c,x,y,z,f,i){if(typeof a=='object'){x=a;y=b}else{x=document.body;y=a}z=x.querySelectorAll(y);if(f=typeof b=='function'?b:c)for(i=0;i<z.length;)f(z[i++],x);return z[0]}</script>
```

### Usage
```javascript
// From module
var s = require('sord')

// Find HTML element
s('#app')

// Find element inside el
s(el, 'input')

// Use callback instead of querySelectorAll
s('p', el => el.textContent = 'hello')

// Callback with root, default root is document.body
s(document, 'p', (el, root) => {
  el.textContent = 'hello'
  root.style.opacity = 0.5
})
```
ISC licensed. Enjoy!
