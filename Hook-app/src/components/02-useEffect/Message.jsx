import {useEffect, useState} from 'react';

const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y }
      setCoords( coords );
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, []);

  return (
    <div>
      <h1>Message...!!!</h1>
      <div>
        Y: { x } X: { y }
      </div>
    </div>
  )
}

export default Message;
