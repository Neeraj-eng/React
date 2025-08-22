import React,{useState} from 'react'
import Usecontext  from './usecontext';


function UseContextprovider({children}){
    const [user,setuser] = useState(0);
    return (
        <>
        <Usecontext.Provider value={{user,setuser}}>
            {children}
        </Usecontext.Provider>
        </>
    )
}

export default UseContextprovider


