import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const StyledAlgorithm = styled.div`
  padding: 20px;

`
export const StyledTitle = styled.h3`
  text-align: center;
`
export const StyledButton = styled.button`
  background-color: #326f74;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: 0;
`

export const StyledPaper = styled(Paper)`
  grid-row: 2/-1;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 2rem;
  padding: 20px;
  opacity: 0.8;
`
