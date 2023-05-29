import React , {useState} from 'react'

export default function Login({login}) {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

  return (
    <div>
    <h1>Login Now</h1>
        <input onChange={e => setEmail(e.currentTarget.value) } type="email" placeholder='Enter Email' />
        <br />
        <input onChange={e => setPassword(e.currentTarget.value) } type="password"  placeholder='Enter Password'/>
        <br />
        <button onClick={() => login(email,password)}>Login</button>
    </div>
  )
}
