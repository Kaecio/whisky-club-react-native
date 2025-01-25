import React, { createContext, useReducer } from "react";
import data from "../data/data"; 

const UsersContext = createContext({})
const initialState = {data}

export function UsersProvider({children}) {

 function reducer(state, action){
  console.warn('action: ',action)
  
  return state
 }

 const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <UsersContext.Provider value={{state, dispatch}}>
    {children}
   </UsersContext.Provider>
  )
}

export default UsersContext