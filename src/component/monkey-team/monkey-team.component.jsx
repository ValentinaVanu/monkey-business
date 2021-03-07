import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import wizard from '../../img/WizardMonkey.png'
import druid from '../../img/DruidMonkey.png'
import dart from '../../img/DartMonkey.png'

import * as SMT from './monkey-team.style'

const MonkeyTeam = () => {
  const[ wizardNum, druidNum, dartNum, collection, groupBy] = useSelector(({ monkey }) => [
    monkey.wizardMonkey.count,
    monkey.druidMonkey.count,
    monkey.dartMonkey.count,
    monkey.collection,
    monkey.groupBy
  ])
  const [group, setGroup] = useState([])

  const handleMonkeyGroup = () => {
   setGroup(Array.from({length: groupBy}, (_, key) => collection.slice(key * Math.ceil(collection.length / groupBy), (key + 1) * Math.ceil(collection.length / groupBy))))
   console.log(groupBy, collection)
  }


  console.log(group)
  return (
    <SMT.StyledPaper>
      <div onClick={handleMonkeyGroup}>{groupBy} Groups of Monkeys</div>
      <SMT.StyledMonkeyTeam>
        {wizardNum !== 0 && Array.from({length: wizardNum}, () => <SMT.StyledMonkeyImg src={wizard} alt="wizard-monkey"/>)}
        {druidNum !== 0 && Array.from({length: druidNum}, () => <SMT.StyledMonkeyImg src={druid} alt="wizard-monkey"/>)}
        {dartNum !== 0 && Array.from({length: dartNum}, () => <SMT.StyledMonkeyImg src={dart} alt="wizard-monkey"/>) }
      </SMT.StyledMonkeyTeam>
    </SMT.StyledPaper>
  )
}
export { MonkeyTeam }
