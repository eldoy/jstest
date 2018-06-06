class Yql {
  constructor () {
    // Set up your class
  }

  static init () {
    return (async function () {
      let yql = new Yql()
      // Do async stuff
      await yql.build()
      // Return instance
      return yql
    }())
  }

  async build () {
    // Do stuff with await if needed
  }
}

async function yql () {
  // Do this instead of "new Yql()"
  let yql = await Yql.init()
  // Do stuff with yql instance
}

yql()
