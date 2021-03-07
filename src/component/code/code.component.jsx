import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import * as SC from './code.style'

const Code = () => {
  const [display, setDisplay] = useState(false)
  let algorithm = '((a, n) => Array.from({length: n}, (v, key) => a.slice(key * Math.ceil(a.length / n), (key + 1) * Math.ceil(a.length / n))))([1, 8, 2, 5, 6, 8, 10, 9, 14, 22, 26, 18, 10], 3)'

  const handleClick = () => {
    setDisplay(!display)
  }

  return (
    <SC.StyledPaper>
      <SC.StyledTitle>Here you can see an algorithm which can group arrays by N</SC.StyledTitle>
      {display && <SC.StyledAlgorithm>{algorithm}</SC.StyledAlgorithm>}
      <Button variant="outlined" onClick={handleClick}>Click Me</Button>
    </SC.StyledPaper>
  )
}

export { Code }
