import React from 'react'
import { useSelector } from 'react-redux'
import wizard from '../../img/WizardMonkey.png'
import druid from '../../img/DruidMonkey.png'
import dart from '../../img/DartMonkey.png'

import * as SMT from './monkey-team.style'

const MonkeyTeam = () => {
  const[ wizardNum, druidNum, dartNum] = useSelector(({ monkey }) => [
    monkey.wizardMonkey.count,
    monkey.druidMonkey.count,
    monkey.dartMonkey.count,
  ])

  return (
    <SMT.StyledPaper>
      <SMT.StyledMonkeyTeam>
        {wizardNum !== 0 && Array.from({length: wizardNum}, () => <SMT.StyledMonkeyImg src={wizard} alt="wizard-monkey"/>)}
        {druidNum !== 0 && Array.from({length: druidNum}, () => <SMT.StyledMonkeyImg src={druid} alt="wizard-monkey"/>)}
        {dartNum !== 0 && Array.from({length: dartNum}, () => <SMT.StyledMonkeyImg src={dart} alt="wizard-monkey"/>) }
      </SMT.StyledMonkeyTeam>
    </SMT.StyledPaper>
  )
}
export { MonkeyTeam }
