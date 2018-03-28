const executeOnlyIf = (methodName, condition) => (fn) => (...param) => {
  if (condition === true) {
    if (typeof fn === 'function') {
      return fn(...param)
    } else {
      throw Error(`${methodName} method: argument needs to be a function, received ${fn}`)
    }
  }
}

export const executeIfDevEnv = executeOnlyIf('executeIfDevEnv', process.env.APP_ENV === 'dev')
