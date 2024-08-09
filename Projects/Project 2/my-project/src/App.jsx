import { useCallback, useState } from "react"


function App() {
  const [length,setLength] = useState(8)
  const [allowNumber,setAllowNumber] = useState(false);
  const [allowChar,setAllowChar] = useState(false); 
  const [password, setPassword] = useState("") 

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghojklmnopqrstuvwxyz"  
  if(allowNumber) str +="0123456789"
  if(allowChar) str +="!@#$%^&*()_+?:"
 
  
  },[length,allowNumber,allowChar])
  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
