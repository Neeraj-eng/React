import React,{useContext} from 'react'
import Usecontext from '../context/usecontext'

function Login(){
    const {user} = useContext(Usecontext)

    if(!user) return <div>please login</div>

    return <div>
        welcome {user.username}
        <br/>
        your password are {user.password}
        </div>
}

export default Login