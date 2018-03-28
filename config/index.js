import { default as devConfig } from './dev'
import { default as dockerConfig } from './docker'

const baseConfig = {
  port: 3000
}

let envConfig = {}

switch (process.env.APP_ENV) {
  case 'docker':
    envConfig = dockerConfig
    break
  default:
    envConfig = devConfig
}

export default { ...baseConfig, ...envConfig }
