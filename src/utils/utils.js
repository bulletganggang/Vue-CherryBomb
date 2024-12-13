const throttle = (func, delay) => {
  let lastTime = 0

  return function (...args) {
    const now = Date.now()
    if (now - lastTime >= delay) {
      lastTime = now
      func.apply(this, args)
    }
  }
}

export { throttle }
