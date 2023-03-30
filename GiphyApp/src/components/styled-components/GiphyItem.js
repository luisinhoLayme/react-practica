import styled from 'styled-components'

export const ImgContainer = styled.div`
  display: inline-block;
  border-radius: 2rem;
  box-shadow: 3px 3px 3px ${({theme}) => theme.colors.shadow1}, -3px -3px 3px ${({theme}) => theme.colors.shadow2};
  padding: 1rem;
  margin: 1rem;

  img {
    border-radius: 1.5rem 1.5rem 0 0;
    max-width: 100%;
    /* width: 100%; */
    /* margin: .5rem; */
  }
  /* &:after {
    content: '';
    border-radius: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow .3s ease;
    z-index: -1;
    box-shadow: inset 3px 3px 3px ${({theme}) => theme.colors.shadow1}, inset -3px -3px 3px ${({theme}) => theme.colors.shadow2};
  } */
`
