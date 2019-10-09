class Bank {
  constructor () {
    this['baner'] = get () {
      return 'hello'
    }
  }
}

const bank = new Bank()
console.log(bank.hello)