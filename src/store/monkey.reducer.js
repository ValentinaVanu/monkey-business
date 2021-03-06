import * as constant from './monkey.constant'

export const initialState = {
  wizardMonkey: 0,
  druidMonkey: 0,
  dartMonkey: 0,
}

export const monkeyReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case constant.MONKEY_COUNT :
      return {
        ...state,
        [action.which] : + 1 
      }
    default:
      return state
  }
}
