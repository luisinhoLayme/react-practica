import { useEffect } from 'react'
import { Loader } from './styled-components/Loading'

const Loading = () => {

  const handleLoader = () => {
    const span = document.querySelectorAll('.span')
    span.forEach((s, i) => {
      s.style.transform = `rotate(${18*i+1}deg)`;
      s.children[0].style.animationDelay = `${-(i+1)*0.2}s`;
      // console.log(0.1*i)
    })
  }

  useEffect(() => {
    handleLoader()
  }, [])

  return (
    <Loader id='loader'>
      <span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span><span className="span"><i></i></span>
    </Loader>
  )
}

export default Loading
