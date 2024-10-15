import * as promise from './concurrency'

const syncFn = async () => {
  const startTime = Date.now()
  // prettier-ignore
  const task1 = async () => new Promise((resolve) => setTimeout(resolve, 10000, 'task1'))
  const task2 = async () =>
    new Promise((resolve) => setTimeout(resolve, 7000, 'task1'))
  const task3 = async () =>
    new Promise((resolve) => setTimeout(resolve, 5000, 'task1'))
  const task4 = async () =>
    new Promise((resolve) => setTimeout(resolve, 6000, 'task1'))

  await task1()
  await task2()
  await task3()
  await task4()
  const endTime = Date.now()
  console.log('sync', endTime - startTime)
}

const asyncFn = async () => {
  const startTime = Date.now()
  const task1 = new Promise((resolve) => setTimeout(resolve, 10000, 'task1'))
  const task2 = new Promise((resolve) => setTimeout(resolve, 7000, 'task1'))
  const task3 = new Promise((resolve) => setTimeout(resolve, 5000, 'task1'))
  const task4 = new Promise((resolve) => setTimeout(resolve, 6000, 'task1'))

  await Promise.all([task1, task2, task3, task4])
  const endTime = Date.now()
  console.log('async', endTime - startTime)
}

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
  syncFn()
  asyncFn()
  //   syntax()
  //   err()
  //   chainedThen()
  //   promise.all()
  //   promise.allSettled()
  //   promise.any()
  //   promise.race()
  //   asyncAwait()
}
main()
