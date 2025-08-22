import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

function Github(){
    const data = useLoaderData(0);
    // const [data,setdata] = useState(0);
    // useEffect(()=>{
    //     fetch('')
    //     .then((res)=>{res.jsson()})
    //     .then((data)=>setdata(data))
    // },[])

    return(
        <>
            <h1>followers {data.follower}</h1>
        </>
    )
}

export default Github

export const Loderfunction = async () => {
    const res = await fetch();
    return res.json();
}