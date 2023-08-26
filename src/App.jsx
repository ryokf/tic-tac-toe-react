import { useState } from 'react'

function Square(){
  return(
    <button className='h-[150px] w-[150px] border border-white bg-transparent rounded-lg'></button>
  )
}

function App() {

  return (
    <div className='h-screen bg-slate-800 flex justify-center items-center'>
      <div className="h-[450px] w-[450px] bg-slate-700 rounded-lg flex flex-wrap">
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </div>
  )
}

export default App
