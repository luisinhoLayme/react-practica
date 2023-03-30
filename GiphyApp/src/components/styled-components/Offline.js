import styled from 'styled-components'
import { keyframes } from 'styled-components'

const animate = keyframes`
  from {
    transform-origin: bottom center;
    transform: scale(1, 0);
  }
  to {
    transform-origin: bottom center;
    transform: scale(1, 1);
  }
`

export const Off = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  background-color: #000;
  width: 100vw;
  height: 3rem;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${ animate } .8s ease-out;
`
