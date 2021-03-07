import React, { useState } from 'react'
import * as SC from './code.style'

const Code = () => {
  const [display, setDisplay] = useState(false)
  let algorithm = '((a, n) => Array.from({length: n}, (_, key) => a.slice(key * Math.ceil(a.length / n), (key + 1) * Math.ceil(a.length / n))))([1, 8, 2, 5, 6, 8, 10, 9, 14, 22,], 3)'

  const handleClick = () => {
    setDisplay(!display)
  }

  return (
    <SC.StyledPaper>
      <SC.StyledTitle>Here you can see an algorithm which can group arrays by N</SC.StyledTitle>
      {display && <SC.StyledAlgorithm>{algorithm}</SC.StyledAlgorithm>}
      <SC.StyledButton onClick={handleClick}>{ display ? 'Hide' : 'Show' } Solution</SC.StyledButton>
    </SC.StyledPaper>
  )
}
export { Code }
