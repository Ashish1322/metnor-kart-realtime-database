import React , {useState} from 'react'

export default function Signup({signup}) {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [confirmPassword,setconfirmPassword] = useState("")

  return (
    <div>
    <h1>Signup Now</h1>
        <input onChange={e => setName(e.currentTarget.value)} type="text" placeholder='Enter your Name' />
        <br />
        <input onChange={e => setEmail(e.currentTarget.value) } type="email" placeholder='Enter Email' />
        <br />
        <input onChange={e => setPassword(e.currentTarget.value) } type="password"  placeholder='Enter Password'/>
        <br />
        <input onChange={e => setconfirmPassword(e.currentTarget.value) } type="password"  placeholder='Confirm Password'/>
        <br />
        <button onClick={() => signup(email,password,confirmPassword,name)} >Signup</button>
    </div>
  )
}
