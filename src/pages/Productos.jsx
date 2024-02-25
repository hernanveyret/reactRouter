import { Link, useNavigate } from 'react-router-dom'
export function Productos(){

  const productos = [
    {id:1, nombre:"Producto 1", precio:100},
    {id:2, nombre:"Producto 2", precio:100},
    {id:3, nombre:"Producto 3", precio:100},
    {id:4, nombre:"Producto 4", precio:100},
    {id:5, nombre:"Producto 5", precio:100}
  ]
  function handleGo(){
    navigate(+1)
  }

  const navigate = useNavigate()
  return <section>
    <h1>Productos</h1>
      <ul>
        { productos.map((producto) => 
        <li key={producto.id}>
          <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
        </li>)}
      </ul>
      <button onClick={handleGo}>Adelante</button>
  </section>
}