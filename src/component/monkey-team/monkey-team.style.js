import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const StyledMonkeyImg = styled.img`
  height: 70px;
  width: 70px;
`
export const StyledEachTeam = styled.div`
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);

  &:empty {
    display: none;
  }
`

export const StyledMonkeyTeam = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const StyledPaper = styled(Paper)`
  grid-row: 1/3;
  grid-column: 3/-1;
  align-self: flex-start;
  margin: 2rem;
  margin-bottom: 8rem;
  padding: 10px;
  opacity: 0.8;
`
