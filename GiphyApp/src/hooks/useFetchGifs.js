import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category, number) => {
  const [ state, setState ] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGifs(category, number)
      .then(imgs => {
        setState({
          data: imgs ? imgs : [],
          loading: imgs ? false : true
        });
      });
  }, [category, number])

  return state;
}
