import { Paper } from '@material-ui/core'
import React from 'react'
import * as SI from './instructions.style'

const Instructions = () => {
  return (
    <SI.StyledWrapper elevation={6}>
      <SI.StyledTitle>Instructions</SI.StyledTitle>
      <ul>
        <li>Select Monkeys from the Bottom Menu</li>
        <li>You can select as many monkeys as you wish</li>
        <li>Pick a number to decide how to group the monkeys</li>
      </ul>
      <SI.StyledFooter>Have fun!</SI.StyledFooter>
    </SI.StyledWrapper>
  )
}

export { Instructions }
