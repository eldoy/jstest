async function f1() {
  await new Promise(r => setTimeout(r, 1000))
  console.log('FUNCTION 1')
  return 1
}

async function f2() {
  await new Promise(r => setTimeout(r, 600))
  console.log('FUNCTION 2')
  return 2
}


async function init() {
  let result = await Promise.all([f1(), f2()])
  console.log({ result })
  console.log('DONE')
}

init()

// // Wrapped with promise
// export const fetchSporsmaal = (context: any) => {
//   return new Promise(resolve => {
//     NVEAxios.get("spoersmaal").then(x => {
//       const s = new Array<Sporsmaal>();
//       x.data.forEach((wsobj: any) => {
//         s.push(SporsmaalRepository.wsobjToSporsmaal(wsobj));
//       });
//       context.commit("SetSporsmaal", s);
//       resolve()
//     });
//   });
// };

// // Skrive om til async function
// export const fetchSporsmaal = async (context: any) => {
//   const x = await NVEAxios.get("spoersmaal")
//   const s = new Array<Sporsmaal>();
//   x.data.forEach((wsobj: any) => {
//     s.push(SporsmaalRepository.wsobjToSporsmaal(wsobj));
//   });
//   context.commit("SetSporsmaal", s);
// };

// // Vente til alle er ferdige
// await Promise.all([fetchSporsmaal()]);