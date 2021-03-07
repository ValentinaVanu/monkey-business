import { Fab } from '@material-ui/core'
import styled from 'styled-components'


export const StyledFab = styled(Fab)`
  && {
    background-color: #326f74;
    margin: 0 2rem;
  }
`

export const MonkeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-row: 1/-1;
`

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
`
