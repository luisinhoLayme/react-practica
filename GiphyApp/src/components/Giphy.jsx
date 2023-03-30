import { useFetchGifs } from '../hooks/useFetchGifs';
import GiphyItem from './GiphyItem';
import Loading from './Loading';
import Offline from './Offline';
import { Title } from './styled-components/Giphy';

const Giphy = ({ category, number }) => {

  const { data:images, loading } = useFetchGifs(category, number);

  if(!navigator.onLine) {
    return
  }
  return (
    <>
      <Title>{ category }</Title>
        {loading && <Loading />}

        {
          images.map( img => (
            <GiphyItem
              key={ img.id }
              {...img}
            />
          ))
        }
    </>
  )
}

export default Giphy
