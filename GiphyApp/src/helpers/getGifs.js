
export const getGifs = async(category, number) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?&q=${ encodeURI(category) }&limit=${ number }&api_key=CNeb8FKirAuigprPjHgVCIhrAzhv0IRT`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });

    return gifs;

  } catch (error) {
    console.log('Algo salio mal!!!', error)
  }

}
