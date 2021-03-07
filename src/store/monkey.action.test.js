import * as constant from './monkey.constant'
import * as action from './monkey.action'

const which = 'monkey'
const groupBy = 2

describe("Testing all monkey actions", () => {
  it("should add monkeys", ()=> {
    expect(action.addMonkeyAction(which)).toEqual({
      type: constant.ADD_MONKEY,
      which
    })
  })
  it("should group monkeys", () => {
    expect(action.groupMonkeyAction(groupBy)).toEqual({
      type: constant.GROUP_MONKEY,
      groupBy
    })
  })
})
