export const all = () => {
  // Resolve Case
  const promise1 = Promise.resolve(100)
  const promise2 = Promise.resolve(200)
  const promise3 = Promise.resolve(300)

  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log('Resolved: ', values) // [100, 200, 300]
    })
    .catch((error) => {
      console.log('Rejected: ', error)
    })

  // Reject Case
  // Error immediately when one of the promises rejects
  const promise4 = Promise.resolve(100)
  const promise5 = Promise.reject('An error occurred!')
  const promise6 = Promise.resolve(300)

  Promise.all([promise4, promise5, promise6])
    .then((values) => {
      console.log('Resolved: ', values)
    })
    .catch((error) => {
      console.log('Rejected: ', error) // "An error occurred!"
    })
}

export const allSettled = () => {
  // Resolve/Reject Case
  const promise7 = Promise.resolve(100)
  const promise8 = Promise.reject('An error occurred!')
  const promise9 = Promise.resolve(300)

  // Wait for all promises to settle (resolve or reject)
  Promise.allSettled([promise7, promise8, promise9]).then((results) => {
    console.log(results)
    // [
    //    { status: "fulfilled", value: 100 },
    //    { status: "rejected", reason: "An error occurred!" },
    //    { status: "fulfilled", value: 300 }
    // ]
  })
}

export const any = () => {
  // Resolve Case
  const promise10 = Promise.reject('Failed first')
  const promise11 = Promise.resolve(200)
  const promise12 = Promise.resolve(300)

  Promise.any([promise10, promise11, promise12])
    .then((value) => {
      console.log('Resolved: ', value) // 200
    })
    .catch((error) => {
      console.log('Rejected: ', error)
    })

  // Reject Case
  // Error when all promises reject
  const promise13 = Promise.reject('Failed first')
  const promise14 = Promise.reject('Failed second')
  const promise15 = Promise.reject('Failed third')

  Promise.any([promise13, promise14, promise15])
    .then((value) => {
      console.log('Resolved: ', value)
    })
    .catch((error) => {
      console.log('Rejected: ', error.errors)
      // AggregateError: All Promises rejected ["Failed first", "Failed second", "Failed third"]
    })
}

export const race = () => {
  // Finish when any promise fullfills or rejects
  // Resolve Case
  const promise16 = new Promise((resolve) => setTimeout(resolve, 100, 'First'))
  const promise17 = new Promise((resolve) => setTimeout(resolve, 50, 'Second'))
  const promise18 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'))

  Promise.race([promise16, promise17, promise18])
    .then((value) => {
      console.log('Resolved: ', value) // "First"
    })
    .catch((error) => {
      console.log('Rejected: ', error)
    })

  // Reject Case
  const promise19 = new Promise((_, reject) =>
    setTimeout(reject, 100, 'Error first')
  )
  const promise20 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'))
  const promise21 = new Promise((resolve) => setTimeout(resolve, 300, 'Third'))

  Promise.race([promise19, promise20, promise21])
    .then((value) => {
      console.log('Resolved: ', value)
    })
    .catch((error) => {
      console.log('Rejected: ', error) // "Error first"
    })
}
