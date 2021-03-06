import styled from 'styled-components'
import jungleImg from '../../img/jungle.jpeg'

export const StyledMap = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${jungleImg});
  position: absolute;
  /* opacity: 0.7; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;

`
