import React from 'react'
import wizard from '../../img/WizardMonkey.png'
import druid from '../../img/DruidMonkey.png'
import dart from '../../img/DartMonkey.png'
import { MonkeyWrapper, StyledFab, StyledImg } from './monkey.style';
import { useDispatch, useSelector } from 'react-redux';
import { addMonkeyAction } from '../../store/monkey.action';


const Monkey = () => {
  const dispatch = useDispatch()
  const[ wizardNum, druidNum, dartNum] = useSelector(({ monkey }) => [
    monkey.wizardMonkey.count,
    monkey.druidMonkey.count,
    monkey.dartMonkey.count,
  ])
  
  const handleClick = e => {
    dispatch(addMonkeyAction(e.target.name))
  }

  console.log(wizardNum, druidNum, dartNum)
  return (
    <MonkeyWrapper>
      <StyledFab>
        <StyledImg
          name="wizardMonkey"
          onClick={handleClick}
          src={wizard}
          alt="wizard-monkey"/>
      </StyledFab>
      <div>Wizard Monkeys</div>
      <StyledFab>
        <StyledImg
          name="druidMonkey"
          onClick={handleClick}
          src={druid}
          alt="druid-monkey"/>
      </StyledFab>
      <div>Druid Monkeys</div>
      <StyledFab>
        <StyledImg
          name="dartMonkey"
          onClick={handleClick}
          src={dart}
          alt="dart-monkey"/>
      </StyledFab>
      <div>Dart Monkeys</div>
    </MonkeyWrapper>
  )
}
export { Monkey }
