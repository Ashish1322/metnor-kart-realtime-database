import React from 'react'
import {auth} from "../firebase"

export default function Home({logout}) {
  return (
    <div>
        <h1>Hey User {auth.currentUser.email} </h1>
        <h3>Welcome in the Websei</h3>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
