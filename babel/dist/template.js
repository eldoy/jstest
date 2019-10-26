"use strict";

function h(t) {
  for (var r = '', i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    r += t[i] + (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  return r + t[i];
}

var data = {
  t: 'hello',
  a: 1
};

function component() {
  return "\n    <div>\n      ".concat(data.t, "\n    </div>\n    <button onclick=\"hello()\">Click</button>\n    <p>\n      Yes\n    </p>\n    <div>").concat(data.a, "</div>\n    <script>").concat(hello, "</script>\n  ");
}

var result = component();
result = component();

function hello() {
  console.log(this);
  alert("Hello");
}

console.log(result);

function list(data) {
  return "<ul>".concat(data.map(function (x) {
    return "<li>".concat(x, "</li>");
  }), "</ul>");
}

list([1, 2, 3]);