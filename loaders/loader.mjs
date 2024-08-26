import path from 'node:path'

const exts = new Set(['.js'])

export async function resolve(specifier, context, nextResolve) {
  console.log({ specifier })
  return nextResolve(specifier)
}

// export async function resolve(specifier, context, nextResolve) {
//   console.log('IN RESOLVE')
//   console.log(specifier)
//   console.log(context)
//   var ext = path.extname(specifier)
//   console.log({ ext })

//   // var rawSource =
//   //   '' + (await nextResolve(url, { ...context, format: '' })).source

//   // if (!exts.has(ext)) {
//   //   return nextResolve(specifier)
//   // }

//   var { url } = await nextResolve(specifier)

//   return nextResolve(specifier)

//   // return {
//   //   format: 'commonjs',
//   //   shortCircuit: false,
//   //   url
//   // }
// }

export async function load(url, context, nextLoad) {
  // console.log('IN LOAD')
  // console.log(url)
  // console.log(context)
  // // if (context.format !== 'commonjs') {
  // //   return nextLoad(url)
  // // }

  // var rawSource =
  //   '' + (await nextLoad(url, { ...context, format: 'module' })).source

  // console.log({ rawSource })

  // var transpiledSource = rawSource.replace('%hello', 'hvad')

  // var { code: transpiledSource } = await transform(rawSource, {
  //   format: 'esm',
  //   loader: 'ts',
  //   sourcemap: 'inline',
  //   target: 'esnext'
  // })

  // return {
  //   format: 'module',
  //   shortCircuit: true,
  //   source: transpiledSource
  // }
  // if ()

  // if (file.endsWith())

  // return nextLoad(url, {
  //   ...context,
  //   format: 'module',
  //   source: transpiledSource
  // })
  console.log({ url })
  return nextLoad(url)
}

// export async function resolve(specifier, context, nextResolve) {
//   console.log({ specifier, context })
//   return nextResolve(specifier)
// }

// export async function load(url, context, nextLoad) {
//   console.log({ url, context })
//   return nextLoad(url)
// }
