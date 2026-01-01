import { useEffect, useState } from "react";

export default function Api(){
    const[data,setdata] = useState([]);
    useEffect(()=>{
        fetch("https://api.freeapi.app/api/v1/todos")
        .then((res)=>res.json())

        .then((data) => {
        console.log("Full API response:", data);
        const list = data.data;
        console.log("Todos list:", list);
        const title = list.map((item) => item.title);
        console.log("Only titles:", title);
        setdata(title);
        })

        .catch((err) => {
            console.error("faild to fetch todos:",err)
        })

    },[])
    return (
        <>
        {data.map((t, idx) => <li key={idx}>{t}</li>)}
        </>
    )

}