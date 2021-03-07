import * as constant from './monkey.constant'

export const initialState = {
  wizardMonkey: {
    count: 0,
  },
  druidMonkey: {
    count: 0,
  },
  dartMonkey:{
    count: 0,
  },
  collection : []
}

export const monkeyReducer = ( state = initialState, action ) => {
  console.log('actiune', action)
  switch (action.type) {
    case constant.SET_MONKEY :
      return {
        ...state,
        collection: [...state.collection, action.which],
        [action.which]: {
          ...state[action.which],
          count: state[action.which].count + 1,
        }
      }
      
    default:
      return state
  }
}
