import { useState } from 'react'
import { Giphy, AddCategory } from './components';
import { useFetchGifs } from './hooks/useFetchGifs';
import { Container, GifContainer, Title } from './styled/GiphyApp';

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([{category: 'Hola', number: 1}]);

  // const handleAdd = () => {
  //   // setCategories([ ...categories, 'Luisinho el pro!!!' ])
  //   setCategories(cats => [...cats, 'Luisinho el pro!!!']);
  // }
  

  return (
    <Container>
      <Title>GifApp</Title>
      <AddCategory setCategories={ setCategories } />

      <GifContainer>
        {
          categories.map(({ category, number }) => (
            <Giphy
              key={ category }
              category={ category }
              number={ number }
            />
          ))
        }
      </GifContainer>

    </Container>
  )
}
export default GifExpertApp
