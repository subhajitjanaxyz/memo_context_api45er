import { useContext } from "react"
import { Countcontext, MYprovider } from "./createContext";
import { ChildforContxt } from "./contextchild";

export const Parent=()=>{
    const {count,massage,setcount,setmassage}=useContext(Countcontext); // context name


    
    return(
<div className="">
    <h1 onClick={()=>setcount(prev=>prev+1)}>count:{count}</h1>
    <ChildforContxt />
</div>



    )
}