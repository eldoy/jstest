"use strict";

// async function init () {
//   await new Promise(r => setTimeout(r, 2000))
//   console.log('DONE')
// }
// init()
function list(data) {
  return "<ul>".concat(data.map(function (x) {
    return "<li>".concat(x, "</li>");
  }), "</ul>");
}

list([1, 2, 3]);