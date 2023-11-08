import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")
  const [cantCaracteres, setCantCaracteres] = useState(0)
  const limit = 100;
  
  useEffect(() => {setCantCaracteres(text.length)}, [text])

  function cambiar(e){
    const texto = e.target.value;
    if(texto.length <= limit){
      setText(texto);
    }
  }

  return (
    <>
      <input type="text" onChange={cambiar} />
      <p> {cantCaracteres}/{limit} </p>
      {cantCaracteres === limit && (<p>Limite de caracteres sobrepasado</p>)}
    </>
  )
}

export default App
