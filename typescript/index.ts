const syntax = () => {
  // Example 1
  const e1 = new Promise((resolve, reject) => {
    resolve('foo')
    // setTimeout(resolve, 1000, 'foo')
  })

  e1.then((v) => {
    console.log('e1', v)
  })

  // Example 2
  const e2 = new Promise((resolve, reject) => {
    resolve('foo')
  })

  e2.then((v) => {
    console.log('e2', v)
  })
}

syntax()
