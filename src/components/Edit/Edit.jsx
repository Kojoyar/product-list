import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contactsContext } from '../../productContext'

const Edit = () => {
  const {oneContact, getOneContact, updContact} = useContext(contactsContext)  
  const navigate = useNavigate()
  const {id} = useParams() 

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    getOneContact(id)
  }, [])

  useEffect(() => {
    if(oneContact) {
        setName(oneContact.name)
        setSurname(oneContact.surname)
        setPhone(oneContact.phone)
    }
  }, [oneContact])

  function saveChanges() {
    let obj = {
        name,
        surname,
        phone
    }

    updContact(obj, id)
    navigate('/')
  }


  return (
    <>
    {oneContact? (
        <div>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} />

        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />

        <button onClick={saveChanges}>Register</button>
        </div>
    ): (
        <h1>Loading</h1>
    ) }
    </>
  )
}

export default Edit