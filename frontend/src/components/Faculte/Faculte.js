import { useEffect,useState } from "react"

export default function Faculte(){
    const [data , setdata]=useState([])
    useEffect(()=>{
        const Data=()=>{
            fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(data => setdata(data))
            
        }
        Data();
    },[])
    return(<>
        {data.map((element) => (
           <div key={element.id}>
            <p>{element.title}</p>
           </div>  
        ))}
        </>)
}