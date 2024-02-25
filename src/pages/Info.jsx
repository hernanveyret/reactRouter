import { useNavigate } from 'react-router-dom'


export const Info = () => {

  const navigate = useNavigate() // se crea una variabe para usar el hooks useNavigate()

  function handleGoBack(){
    navigate(-1)
  }
  

  return (
    <article>
    <h1>Info</h1>
    <button onClick={handleGoBack}>Atras</button>
    </article>
  )
}