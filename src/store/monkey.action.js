import * as constant from './monkey.constant'

// export const setMonkeyAction = count => ({
//   type: constant.SET_MONKEY,
//   count
// })

export const monkeyCountAction = which => ({
  type: constant.MONKEY_COUNT,
  which
})
