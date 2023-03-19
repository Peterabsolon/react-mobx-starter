/* eslint-disable */

// TODO: Log to some external aggregator

export const logger = {
  log: (...data: any) => {
    console.log(data)
  },

  info: (...data: any) => {
    console.info(data)
  },

  warn: (...data: any) => {
    console.warn(data)
  },

  error: (...data: any) => {
    console.error(data)
  },
}
