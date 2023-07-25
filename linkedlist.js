// Create a circular linked list from an array of objects

// class List {
//   constructor(items) {
//     const list = []
//     for (var i = 0; i < items.length; i++) {
//       var item = items[i]
//       var next = items[i + 1]
//       if (!next) {
//         next = items[0]
//       }
//       var prev = items[i - 1]
//       if (!prev) {
//         prev = items[items.length - 1]
//       }
//       list.push({
//         item,
//         next,
//         prev
//       })
//     }
//     this.list = list
//   }
// }

const items = [
  { offsetParent: null },
  { offsetParent: 1 },
  { offsetParent: null },
  { offsetParent: 2 },
  { offsetParent: null },
  { offsetParent: 3 },
  { offsetParent: 4 }
]

// const list = new List(items)

class Node {}

class List {
  constructor(head) {}
}

var node
for (var i = 0; i < items.length; i++) {
  node = new Node()
  node.data = items[i]

  node.next = new Node()
  node.next.data = items[i + 1]

  items[i + 1]
  if (!next) {
    next = items[0]
  }
  var prev = items[i - 1]
  if (!prev) {
    prev = items[items.length - 1]
  }
  list.push({
    item,
    next,
    prev
  })
}
