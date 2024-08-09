import { useState } from "react"


function App() {
  const [color,setColor]= useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2"> 
    
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-red
    rounded-3xl "> 
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"> 
      Blue </button>
    <button 
    style={{backgroundColor:"Yellow"}}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"> 
      Yellow </button>
    <button
    style={{backgroundColor:"Pink"}}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"> 
      Pink </button>
    <button
    style={{backgroundColor:"Olive"}}
     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"> 
      Olive </button>
    <button 
    style={{backgroundColor:"Green"}}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"> 
      Green </button>
    <button
    style={{backgroundColor:"White"}}
     className="outline-none px-4 py-1 rounded-full text-black shadow-lg"> 
      White </button>

    </div>    
    </div>

   </div>
  )
}

export default App
