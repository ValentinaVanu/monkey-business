import { Paper } from '@material-ui/core'
import styled from 'styled-components'


export const StyledTitle = styled.h1`
  text-align: center;
`
export const StyledFooter = styled.h3`
  text-align: end;
`

export const StyledWrapper = styled(Paper)`
  grid-row: 1/2;
  grid-column: 1/3;
  margin: 2rem;
  padding: 10px;
  opacity: 0.7;

  && {
    background-color: #326f74;
    color: #fff;
  }
`
