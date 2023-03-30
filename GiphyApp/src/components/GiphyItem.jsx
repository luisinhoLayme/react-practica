import { ImgContainer } from "./styled-components/GiphyItem"

const GiphyItem = ({ title, url }) => {
  return (
    <ImgContainer>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </ImgContainer>
  )
}

export default GiphyItem
