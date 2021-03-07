import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import wizard from '../../img/WizardMonkey.png'
import druid from '../../img/DruidMonkey.png'
import dart from '../../img/DartMonkey.png'

import * as SMT from './monkey-team.style'

const monkeyImgs = {
  wizardMonkey: wizard,
  druidMonkey: druid,
  dartMonkey: dart
}

const MonkeyTeam = () => {
  const [group, setGroup] = useState([])
  const[ wizardNum, druidNum, dartNum, collection, groupBy] = useSelector(({ monkey }) => [
    monkey.wizardMonkey.count,
    monkey.druidMonkey.count,
    monkey.dartMonkey.count,
    monkey.collection,
    monkey.groupBy
  ])

  useEffect(
    () => {
      setGroup(Array.from({length: groupBy}, (_, key) => collection.slice(key * Math.ceil(collection.length / groupBy), (key + 1) * Math.ceil(collection.length / groupBy))))
    },
    [wizardNum, druidNum, dartNum, groupBy]
  )


  console.log(group)
  return (
    <SMT.StyledPaper>
      <div>{groupBy} Groups of Monkeys</div>
      <SMT.StyledMonkeyTeam>
        {group.map(item => <SMT.StyledEachTeam>{item.map(monkey => <SMT.StyledMonkeyImg src={monkeyImgs[monkey]}/>)}</SMT.StyledEachTeam>)}
      </SMT.StyledMonkeyTeam>
      {/* <pre>{JSON.stringify(group, null, 2)}</pre> */}
    </SMT.StyledPaper>
  )
}
export { MonkeyTeam }
