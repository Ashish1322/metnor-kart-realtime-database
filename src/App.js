import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

import {auth} from "./firebase"

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"
import { useState } from 'react';

function App() {

  const [isLoggedIn,setLoggedIn] = useState(false)


  const login = (email,password) => {
    signInWithEmailAndPassword(auth,email,password)
    .then(response => {
      setLoggedIn(true)
    })
    .catch(err => alert(err.message))
  }

  const signup = (email,password,confirmPassword,name) => {
    if(password != confirmPassword)
    {
      alert("Password Doesn't Match");
      return
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then(response =>  {
      alert("Account Created Succesfully")
    })
    .catch((err) => alert(err.message))
  }

  const logout = () => {
    setLoggedIn(false)
    signOut(auth)
  }

  return (
    <div className="App">
        <Login login = {login}  />
        <Signup signup= {signup} />

        {
          isLoggedIn ? 
          <div>
            <Home logout={logout} />
           </div>  : null
        }
    </div>
  );
}

export default App;
