const {
  buildString,
  buildDiv,
  buildDiv2,
  buildTemplate,
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
} = require('../index.js')

const N = 10000

describe('html', () => {
  it('should build html', async () => {
    const hello = 'Bye'
    let template

    document.innerHTML = ''
    template = buildString`<div><ul><li><span>${ buildString`<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderString')
    for (let i = 0; i < N; i++) {
      renderString(template, document.body)
    }
    console.timeEnd('renderString')
    expect(document.body.innerHTML).toBe(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)


    document.innerHTML = ''
    template = buildDiv`<div><ul><li><span>${ buildDiv`<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderDiv')
    for (let i = 0; i < N; i++) {
      renderDiv(template, document.body)
    }
    console.timeEnd('renderDiv')
    expect(document.body.innerHTML).toBe(`<div><div><ul><li><span><span>Bye</span></span></li></ul></div></div>`)


    document.innerHTML = ''
    template = buildDiv2`<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderDiv2')
    for (let i = 0; i < N; i++) {
      renderDiv2(template, document.body)
    }
    console.timeEnd('renderDiv2')
    expect(document.body.innerHTML).toBe(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = `<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderDiv3')
    for (let i = 0; i < N; i++) {
      renderDiv3(template, document.body)
    }
    console.timeEnd('renderDiv3')
    expect(document.body.innerHTML).toBe(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)


    document.innerHTML = ''
    template = buildTemplate`<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderTemplate')
    for (let i = 0; i < N; i++) {
      renderTemplate(template, document.body)
    }
    console.timeEnd('renderTemplate')
    expect(document.body.innerHTML).toBe(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = `<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('renderParser')
    for (let i = 0; i < N; i++) {
      renderParser(template, document.body)
    }
    console.timeEnd('renderParser')
    expect(document.body.innerHTML).toBe(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)


    // document.innerHTML = ''
    // template = buildString`<div><ul><li><span>${ buildString`<span>${ hello }</span>` }</span></li></ul></div>`
    // console.time('appendString')
    // for (let i = 0; i < N; i++) {
    //   appendString(template, document.body)
    // }
    // console.timeEnd('appendString')
    // expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)


    document.innerHTML = ''
    template = buildDiv`<div><ul><li><span>${ buildDiv`<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('appendDiv')
    for (let i = 0; i < N; i++) {
      appendDiv(template, document.body)
    }
    console.timeEnd('appendDiv')
    expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = buildDiv2`<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('appendDiv2')
    for (let i = 0; i < N; i++) {
      appendDiv2(template, document.body)
    }
    console.timeEnd('appendDiv2')
    expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = `<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('appendDiv3')
    for (let i = 0; i < N; i++) {
      appendDiv3(template, document.body)
    }
    console.timeEnd('appendDiv3')
    expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = buildTemplate`<div><ul><li><span>${ buildTemplate`<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('appendTemplate')
    for (let i = 0; i < N; i++) {
      appendTemplate(template, document.body)
    }
    console.timeEnd('appendTemplate')
    expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

    document.innerHTML = ''
    template = `<div><ul><li><span>${ `<span>${ hello }</span>` }</span></li></ul></div>`
    console.time('appendParser')
    for (let i = 0; i < N; i++) {
      appendParser(template, document.body)
    }
    console.timeEnd('appendParser')
    expect(document.body.innerHTML).toMatch(`<div><ul><li><span><span>Bye</span></span></li></ul></div>`)

  })
})
