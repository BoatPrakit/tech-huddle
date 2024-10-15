function turtleRace() {
  return new Promise((resolve) => {
    const turtleSpeed = Math.random() * 10000 + 5000 // Turtle takes between 10 and 20 seconds
    console.log('Turtle starts the race...')
    setTimeout(() => {
      resolve('Turtle')
    }, turtleSpeed)
  })
}

function rabbitRace() {
  return new Promise((resolve, reject) => {
    const rabbitSpeed = Math.random() * 5000 + 5000 // Rabbit takes between 5 and 10 seconds
    const takesBreak = Math.random() < 0.5 // 50% chance the rabbit takes a break
    console.log('Rabbit starts the race...')
    if (takesBreak) {
      console.log('Rabbit takes a break...')
      reject('Rabbit took a nap and lost!')
    } else {
      setTimeout(() => {
        resolve('Rabbit')
      }, rabbitSpeed)
    }
  })
}

// Start the race
const startTime = Date.now()
Promise.race([turtleRace(), rabbitRace()])
  .then((winner) => {
    console.log(winner, ' wins the race!') // Who won the race
  })
  .catch((loser) => {
    console.log(loser) // If the rabbit took a break
  })
  .finally(() => {
    const endTime = Date.now()
    console.log(endTime - startTime, 'ms') // Total time taken
  })
