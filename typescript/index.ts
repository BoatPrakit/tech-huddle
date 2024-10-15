import * as promise from './concurrency'

const syntax = () => {
  // Example 1
  const e1 = new Promise((resolve, reject) => {
    resolve('foo')
    // setTimeout(resolve, 1000, 'foo')
  })

  e1.then((v) => {
    console.log('1:', v)
    return new Promise((resolve) => {
      resolve('second promise')
    })
  }).then((v) => {
    console.log('2:', v)
  })

  // Example 2
  const e2 = new Promise((resolve, reject) => {
    resolve('foo')
  })

  e2.then((v) => {
    console.log('e2', v)
  })
}

const err = () => {
  const e1 = new Promise((resolve, reject) => {
    reject('Oh no! it error')
  })

  e1.then((v) => {
    console.log('in then', v)
  })

  e1.catch((v) => {
    console.log('catch', v)
  })
}

const chainedThen = () => {
  // Example 1
  const chain1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'first')
  })
  chain1
    .then((v) => {
      console.log('1:', v)
      return new Promise((resolve) => {
        setTimeout(resolve, 1000, 'second')
      })
    })
    .then((v) => {
      console.log('2:', v)
    })
}

const asyncAwait = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo')
  })
  const v = await promise
  console.log(v)
  // reject
  try {
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(reject, 1000, 'oh no! it reject')
    })
    await promise2
  } catch (e) {
    console.log(e)
  }
}

const main = () => {
  syntax()
  //   err()
  //   chainedThen()
  //   promise.all()
  //   promise.allSettled()
  //   promise.any()
  //   promise.race()
  asyncAwait()
}
main()
