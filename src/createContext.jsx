import { createContext, useState } from "react";
// import context from "react-bootstrap/esm/AccordionContext";


// create context 

export const Countcontext=createContext();

//  crate a provider for all state
export const MYprovider=({children})=>{
const [count ,setcount]=useState(0);
const[massage,setmassage]=useState("hellow");
return(<>
<Countcontext.Provider value={{count,massage,setcount,setmassage}}>
{children}

</Countcontext.Provider>

</>)
}