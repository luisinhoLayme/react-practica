import styled from 'styled-components';

export const Form = styled.form`

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
  }

  & > div:nth-of-type(3) {
    width: 70%;
    margin: 0 auto;

    @media screen and (min-width: 720px) {
      width: 100%;
      margin: initial;
    }
  }
`

const Hover = styled.div`
  @media (hover: hover) {

  &:hover {
    box-shadow: 0px 0px 0px ${({theme}) => theme.colors.shadow1}, 0px 0px 0px ${({theme}) => theme.colors.shadow2};
  }
  }

  &:after {
    content: '';
    border-radius: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow .3s ease;
    z-index: -1;
  }
  @media (hover: hover) {

  &:hover:after {
    box-shadow: inset 3px 3px 3px ${({theme}) => theme.colors.shadow1}, inset -3px -3px 3px ${({theme}) => theme.colors.shadow2};
  }
  }
`
export const InputGroup = styled(Hover)`
  border-radius: 3rem;
  box-shadow: 3px 3px 3px ${({theme}) => theme.colors.shadow1}, -3px -3px 3px ${({theme}) => theme.colors.shadow2};
  width: 100%;
  transition: box-shadow .3s ease;

  position: relative;
  z-index: 1;

`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 1rem;
  outline: none;
  color: ${({theme}) => theme.colors.textColor};
  text-align: center;

  @media screen and (min-width: 720px) {
    text-align: left;
  }
`

export const ButtonLimit = styled(Hover)`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  box-shadow: 3px 3px 3px ${({theme}) => theme.colors.shadow1}, -3px -3px 3px ${({theme}) => theme.colors.shadow2};
  position: relative;
  z-index: 1;

  @media screen and (min-width: 780px) {
    width: 7rem;
  }

  span {
    font-weight: bold;
    font-size: 2rem;
    pointer-events: none;
    color: royalblue;
    transform: translateY(-2px);

    &::selection {
      background-color: transparent;
    }
  }
`

export const ButtonSubmit = styled.button`
  border: none;
  color: ${({theme}) => theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;
  outline: none;
  background-color: transparent;

  svg {
    font-size: 2rem;
    margin-right: 1rem;
    path {
      stroke: ${({theme}) => theme.colors.textColor};
    }
  }
`

export const InputNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 70%;
  margin: 2rem auto;

  input[type="number"] {
    -webkit-appearance: textfield;
    text-align: center;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


  @media screen and (min-width: 720px) {
    width: initial;
    margin: initial;
  }
`
