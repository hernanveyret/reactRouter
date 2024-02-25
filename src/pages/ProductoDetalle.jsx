import { useParams, useNavigate } from 'react-router-dom'

export function ProductoDetalle(){
  
function obtenerProducto(id){
  const productos = [
    {id:1, nombre:"Producto 1", precio:100},
    {id:2, nombre:"Producto 2", precio:100},
    {id:3, nombre:"Producto 3", precio:100},
    {id:4, nombre:"Producto 4", precio:100},
    {id:5, nombre:"Producto 5", precio:100}
  ]
return productos.find(producto => producto.id.toString() === id)
}
function handleGoBack(){ // se crea una funcion que resta el numero de pagina asi vuelve una pagina atras
  navigate(-1)
}


const { id } = useParams()
//console.log(id)
const producto = obtenerProducto(id) // se crea una variable que va a tener el producto segun el id que se pasa por parametro
//console.log(producto)
const navigate = useNavigate() // se crea una variabe para usar el hooks useNavigate()

  return <section>
    <h1>Detalle del Producto</h1>
    <article>
      <h2>{producto.nombre}</h2>
      <h3>{producto.id}</h3>
      <h4>${producto.precio}</h4>
      <button onClick={handleGoBack}>Atras</button>
    </article>
   </section>
}