function main() {  
  try {
    // return 1
    throw new Error('hello')

  } finally {
    console.log('FINALLY')
  }
}
main()
