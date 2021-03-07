import * as constant from './monkey.constant'

export const setMonkeyAction = which => ({
  type: constant.SET_MONKEY,
  which
})

export const monkeyCountAction = count => ({
  type: constant.MONKEY_COUNT,
  count
})
