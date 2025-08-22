import React,{useContext, useState} from 'react'
import Usecontext from '../context/usecontext'
import seContext from 'react'

function Profile(){
        const [username,setusername] = useState('')
        const [password,setpassword] = useState('')

        const {setuser} = useContext(Usecontext);

        const handelsubmit = (e) => {
            e.preventDefault()
            setuser({username,password})
        }

    return(
        <div>
            <h1>login page</h1>
            <input
            type='text'
            placeholder='useername'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            />
            <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e)=>setpassword(e.target.value)}
            />
            <br/>
            <button style={{marginLeft:"150px",backgroundColor:"yellow" ,marginTop:"20px" ,padding:"3px"}} onClick={handelsubmit}>submit</button>
        </div>
    )
}

export default Profile