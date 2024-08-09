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

  for(i=1; i <=array.length; i++){
    let char = Math.floor(Math.random()*string.length +1)
    pass = str.charAt(char)
  }
  setPassword(pass)



  
 
  
  },[length,allowNumber,allowChar])
  return (
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3 "
      placeholder="password"
      readOnly
      
      />
      </div> 
    </div>
  )
}

export default App
