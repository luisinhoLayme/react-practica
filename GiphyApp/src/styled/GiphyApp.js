import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
    text-shadow: 5px 5px 4rem #fff,
      10px 10px 5rem #fff;
  }
  to {
    opacity: 1;
    text-shadow: initial;
  }
`

export const Container = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0;
  animation: ${ fade } 3s  ease-out ;
`

export const GifContainer = styled.div`
  text-align: center;
  padding: 1rem 0;
`
