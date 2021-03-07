import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const StyledMonkeyImg = styled.img`
  height: 100px;
  width: 100px;
`

export const StyledMonkeyTeam = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const StyledPaper = styled(Paper)`
  grid-row: auto;
  grid-column: 3/-1;
  margin: 2rem;
  padding: 10px;
  opacity: 0.8;
`
