function buildString(tags, ...data) {
  for (var html = '', i = 0; i < data.length; i++) {
    html += tags[i] + data[i]
  }
  return html += tags[i]
}

function buildDiv(tags, ...data) {
  for (var html = '', i = 0; i < data.length; i++) {
    // Also works
    // if (data[i].constructor === HTMLDivElement) {
    if (data[i] instanceof HTMLElement) {
      data[i] = data[i].innerHTML
    }
    html += tags[i] + data[i]
  }
  const template = document.createElement('div')
  template.innerHTML = html += tags[i]
  return template
}

function buildDiv2(tags, ...data) {
  for (var html = '', i = 0; i < data.length; i++) {
    html += tags[i] + data[i]
  }
  // Fragment doesn't work:
  // const fragment = document.createDocumentFragment()
  const fragment = document.createElement('div')
  fragment.innerHTML = html += tags[i]
  return fragment
}

function buildTemplate(tags, ...data) {
  for (var html = '', i = 0; i < data.length; i++) {
    // Also works:
    // if (data[i].constructor === HTMLTemplateElement) {
    if (data[i] instanceof HTMLElement) {
      data[i] = data[i].innerHTML
    }
    html += tags[i] + data[i]
  }
  const template = document.createElement('template')
  template.innerHTML = html += tags[i]
  return template
}

function renderString(template, root) {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  root.innerHTML = template
}

function renderDiv(template, root) {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  root.appendChild(template)
}

function renderDiv2(template, root) {
  for (let c = root.firstChild; c !== null; c = root.firstChild) {
    root.removeChild(c)
  }
  root.appendChild(template)
  for (let i = 0; i < template.children.length; i++) {
    const element = template.children[i]
    root.appendChild(element.cloneNode(true))
  }
  template.remove()
}

function renderDiv3(template, root) {
  for (let c = root.firstChild; c !== null; c = root.firstChild) {
    root.removeChild(c)
  }
  var tag = document.createElement('div')
  tag.innerHTML = template
  root.appendChild(tag)
  for (let i = 0; i < tag.children.length; i++) {
    const element = tag.children[i]
    root.appendChild(element.cloneNode(true))
  }
  tag.remove()
}

function renderTemplate(template, root) {
  for (let c = root.firstChild; c !== null; c = root.firstChild) {
    root.removeChild(c)
  }
  root.appendChild(template.content.cloneNode(true))
  // Also works:
  // root.appendChild(document.importNode(template.content, true))
}

function renderParser(template, root) {
  for (let c = root.firstChild; c !== null; c = root.firstChild) {
    root.removeChild(c)
  }

  var dom = new DOMParser().parseFromString(template, 'text/html').body
  while (dom.hasChildNodes()) {
    root.appendChild(dom.firstChild)
  }
}

function appendString(template, root) {
  root.innerHTML += template
}

function appendDiv(template, root) {
  root.appendChild(template)
}

function appendDiv2(template, root) {
  root.appendChild(template)
  for (let i = 0; i < template.children.length; i++) {
    const element = template.children[i];
    root.appendChild(element.cloneNode(true))
  }
  template.remove()
}

function appendDiv3(template, root) {
  var tag = document.createElement('div')
  tag.innerHTML = template
  root.appendChild(tag)
  for (let i = 0; i < tag.children.length; i++) {
    const element = tag.children[i]
    root.appendChild(element.cloneNode(true))
  }
  tag.remove()
}

function appendTemplate(template, root) {
  root.appendChild(document.importNode(template.content, true))
}

function appendParser(template, root) {
  var dom = new DOMParser().parseFromString(template, 'text/html').body
  while (dom.hasChildNodes()) {
    root.appendChild(dom.firstChild)
  }
}

module.exports = {
  buildString,
  buildDiv,
  buildTemplate,
  buildDiv2,
  renderString,
  renderDiv,
  renderDiv2,
  renderDiv3,
  renderTemplate,
  renderParser,
  appendString,
  appendDiv,
  appendDiv2,
  appendDiv3,
  appendTemplate,
  appendParser
}

