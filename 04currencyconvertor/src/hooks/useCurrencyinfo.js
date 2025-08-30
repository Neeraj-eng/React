// import useState, { useEffect } from 'react'

// export default function useCurrancy (currency){
//     const [data,setdata] = useState();

//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((data) => setdata(data[currency]))
//     },[currancy])

//     return data;
// }

import {useEffect, useState } from "react"

function  useCurrency(currency){
    const [data,setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
    },[currency])
    return data;
}

export default useCurrency




