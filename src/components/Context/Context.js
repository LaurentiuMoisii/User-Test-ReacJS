import React, {createContext, useState} from 'react'

export const StoreContext = createContext()
export const Context = (props) => {

const message = 'Hello'
const [users, setUsers] = useState([])
const [user, setUser] = useState({
  isAdmin: false,
  isLogged: false
})

const fetchItems = async () => {
  const data = await fetch('https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users')
  const items = await data.json();
  setUsers(items)
}

const getUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const filterUser = users.filter((obj) => {
      return obj.email === email
    })
    console.log(filterUser)
    if (filterUser.length === 1){
      setTimeout((cb) => {
        setUser({...filterUser[0], isLogged: true})
        resolve()
      }, 1000)
      
    } else {
      reject()
    }
    // console.log(filterUser)
   
  })
}

const updateUserHandler = async(user) => {
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
     'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
    },
    body: JSON.stringify(user) // We send data in JSON format
   }
   await fetch(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/${user.id}`, putMethod)
   .then(response => response.json())
   .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
   .catch(err => console.log(err)) // Do something with the error 
   fetchItems();
}

const deleteUsersHandler = async(user) => {
  const deleteMethod = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' 
     },
    body: JSON.stringify(user)
  }
  await fetch(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/${user.id}`, deleteMethod)
  .then(response => response.json())
  .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  .catch(err => console.log(err)) // Do something with the error 
  fetchItems();
}

const addUsersHandler = async(user) => {
  const addMethod = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' 
     },
    body: JSON.stringify(user)
  }
  await fetch(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users`, addMethod)
  .then(response => response.json())
  .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
  .catch(err => console.log(err)) // Do something with the error 
  fetchItems();
}

return (
  <StoreContext.Provider value={{message, users, fetchItems, getUser, user, updateUserHandler, deleteUsersHandler, addUsersHandler}}>
    {props.children}
  </StoreContext.Provider>
  )
}