import React from 'react'
import { useSelector } from 'react-redux'
import wizard from '../../img/WizardMonkey.png'
import druid from '../../img/DruidMonkey.png'
import dart from '../../img/DartMonkey.png'

import * as SMT from './monkey-team.style'

const MonkeyTeam = () => {
  const[ wizardNum, druidNum, dartNum] = useSelector(({ monkey }) => [
    monkey.wizardMonkey,
    monkey.druidMonkey,
    monkey.dartMonkey,
  ])

  return (
    <SMT.StyledPaper>
      <SMT.StyledMonkeyTeam>
        {wizardNum && <SMT.StyledMonkeyImg src={wizard} alt="wizard-monkey"/>}
        {druidNum && <SMT.StyledMonkeyImg src={druid} alt="wizard-monkey"/>}
        {dartNum && <SMT.StyledMonkeyImg src={dart} alt="wizard-monkey"/>}
      </SMT.StyledMonkeyTeam>
    </SMT.StyledPaper>
  )
}
export { MonkeyTeam }
