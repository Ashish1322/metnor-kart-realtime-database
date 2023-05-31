import React, {useEffect, useState} from 'react'
import {auth} from "../firebase"
import {ref,set,push,get,child} from "firebase/database"
import {db} from "../firebase"

export default function Home({logout}) {
  const [todo,setTodo] = useState("")
  const [userTodos, setUserTodos] = useState([])

  const addTodo = () => {
    
    const refToLoation = ref(db,"todos")
    const newLocation = push(refToLoation)

    set(newLocation, {
      todo: todo,
      email: auth.currentUser.email
    })
    .then(() => {
      alert("Todo Added")
      loadTodos()
    })
    .catch(() => alert("Something Went Wrong"))
  } 

  const loadTodos = () => {
    const readRef = ref(db)
    get(child(readRef,"todos"))
    .then(snapshot => {
      if(snapshot.exists())
      {
        let objet = snapshot.val()
        setUserTodos(Object.values(objet))

      }
    })
    .catch(err => alert("Something Went Wrong !"))

  }

  useEffect(() => {
    loadTodos()
  }, [])

  return (
    <div>
        <h1>Hey User {auth.currentUser.email} </h1>
        <button onClick={logout}>Logout</button>
        <h3>Welcome in the Todo List</h3>
        <div>
          <input onChange={e => setTodo(e.currentTarget.value)} type="text" />
          <button onClick={addTodo}>Add Todo</button>

          <button onClick={loadTodos}>Load Todos</button>


          {
            userTodos.map((todo,index) => <div key={index}>
            <p> {todo.todo}</p>
            <p> {todo.email}</p>
            <hr />
            </div>)
          }
        </div>
        
    </div>
  )
}
