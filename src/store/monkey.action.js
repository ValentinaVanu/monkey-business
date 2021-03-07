import * as constant from './monkey.constant'

export const addMonkeyAction = which => ({
  type: constant.ADD_MONKEY,
  which
})

export const groupMonkeyAction = groupBy => ({
  type: constant.GROUP_MONKEY,
  groupBy
})
