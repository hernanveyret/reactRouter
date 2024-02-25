import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export function Header(){

  return (
  <header>
    <div>
       
          <img src={viteLogo} className="logo" alt="Vite logo" />
       
          <img src={reactLogo} className="logo react" alt="React logo" />
        
      </div>
      <h1>Vite + React</h1>
    
  </header>
  )
}