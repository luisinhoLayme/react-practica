import styled from 'styled-components'

export const Loader = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 30% auto;
  transform: rotateY(160deg);

  @media screen and (min-width: 720px){
    margin: 20% auto;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    i {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: #bbb;
      box-shadow: 0 0 10px #bbb,
              0 0 20px #bbb,
              0 0 40px #bbb,
              0 0 60px #bbb,
              0 0 80px #bbb,
              0 0 100px #bbb;
      animation: animate 2s linear infinite;
      /* animation-delay: .1s; */

    @keyframes animate {
      0% {
        transform: scale(1);
      }
      80%, 100% {
        transform: scale(0);
      }
    }
    }

  }
`
