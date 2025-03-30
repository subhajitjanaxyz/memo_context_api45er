import { useContext } from "react";
import { Countcontext } from "./createContext";

export const ChildforContxt=()=>{
        const {count,massage,setcount,setmassage}=useContext(Countcontext); // context name

    
    return (
<>
<h1>its a child component :{count}</h1>
<h1>{massage}</h1>


</>

    )
}