import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Header } from './componentes/Header.jsx';
import { Menu } from './componentes/Menu.jsx';
import { Info } from './pages/Info.jsx';
import { Error404 } from "./componentes/Error404.jsx";
import './App.css'
import { Productos } from "./pages/Productos.jsx";
import { ProductoDetalle } from "./pages/ProductoDetalle.jsx";

function Acerca(){
  
  function handleGoBack(){
    navigate(-1)
  }
  const navigate = useNavigate()
  return (
    <article>
    <h1>Acerca</h1>
    <button onClick={handleGoBack}>Atras</button>
    </article>
  )
}

function App() {
  
  

  return (
    <>
      <BrowserRouter>
      <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} /> {/*Llma a una etiqueta jsx */}
          <Route path="/acerca" element={<Acerca />} /> {/*Llma a un componenet en la misma pagina */}
          <Route path="info" element={<Info /> } /> {/*Llma a un componente externo */}
          <Route path="/about" element={<Navigate to="/acerca" /> } />
          <Route path="/productos" element={<Productos /> }/>
          <Route path="/productos/:id" element={<ProductoDetalle /> }/>
          <Route path="*" element={<Error404 /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
