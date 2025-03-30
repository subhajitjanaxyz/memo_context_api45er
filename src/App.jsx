import { memo, useCallback, useState } from 'react'

import './App.css'
import { Parent } from './parent'
import { MYprovider } from './createContext'

const Child= memo(
  function abc({data,funs}){
    console.log("it child ")
    return (
  <>
  
  <h1 onClick={funs}>its child:{data}</h1>
  </>
    )
  }
)
function App() {
  const [count, setCount] = useState(0)
  const hey='hey'
  function abc(){
    alert("hey");
  
  }
  const abcd=useCallback(()=>{
     return abc()
  },[])

  return (
    <>
<h1 onClick={()=>setCount(a=>a+1)}>app:{count}</h1>
<Child  funs={abcd}/>
        <MYprovider>
        <Parent />
        </MYprovider>
    
    </>
  )
}

export default App
