import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength]=useState(10)
  const[numberAllowed,setNUmberAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false) 
  const[password,setpassword]=useState(' ')

  const passref=useRef(null)

  const genPassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@$%^&*()_+"

    for(let i=0; i<length; i++){
      const char=Math.floor(Math.random() * str.length)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length, numberAllowed, charAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    genPassword()  
  },[length, numberAllowed, charAllowed])


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-black text-gray-700'>
    <h1 className='text-white text-center  my-4'> Password Generator</h1>
    <div className='flex shoadow rounded-lg overflow-hidden  mb-4'>
    <input type="text" placeholder ='password' value={password} className='outline-none bg-white w-full py-1 px-3' readOnly />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ' onClick={copyPasswordToClipboard}>copy</button>
    </div>

    <div className='flex flex-wrap items-center gap-x-2 '>
    <input type="range" min={6} max={100} value={length} className='cursor-pointer'  onChange={(e)=>setLength(e.target.value)}
        name=""
         id=""
     />
     <label htmlFor='length'>Length:{length}</label>
     
    
    <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
      setNUmberAllowed((prev)=>!prev)
    }}
        name=""
         id=""
     />
     <label htmlFor='number'>Numbers</label>

     
    <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
      setCharAllowed((prev)=>!prev)
    }}
        name=""
         id=""
     />
     <label htmlFor='charInput'>character</label>
     
     
    </div>
   </div>
  )
}

export default App
