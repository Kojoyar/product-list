import axios from 'axios';
import React, {useReducer } from 'react'

export const contactsContext = React.createContext()

const INIT_STATE = {
  contacts: [],
  oneContact: null
}

function reducer(state = INIT_STATE, action ) {
      switch (action.type) {
        case 'GET_USERS':
          return {...state, contacts: action.payload};
        case 'ONE_USER':  
          return {...state, oneContact: action.payload};
        default: 
          return state
      }
}

const ProductContextProvider = ({children}) => {
  const API = 'http://localhost:8000/contacts'
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  async function getContacts() {
    let res = await axios(API);
    dispatch({
        type: 'GET_USERS',
        payload: res.data
    });
  };

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts()
  }

  async function createContact(newUser) {
      await axios.post(API, newUser);
      getContacts();
  };

 async function getOneContact(id) {
  let res = await axios(`${API}/${id}`);
   dispatch({
    type: 'ONE_USER',
    payload: res.data
   })
 }


  async function updContact(updObj, id) {
    await axios.patch(`${API}/${id}`, updObj)
    getContacts()
  }

  return (
    <contactsContext.Provider value={{contacts: state.contacts, oneContact: state.oneContact, createContact, getContacts, deleteContact, updContact, getOneContact}} >
        {children}
    </contactsContext.Provider>
  )
}

export default ProductContextProvider