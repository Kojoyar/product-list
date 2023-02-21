import React, { useContext, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { contactsContext } from '../../productContext';

const AddProduct = () => {
  const { createContact } = useContext(contactsContext)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  function addProduct() {
    let newObj = {
      name,
      surname,
      phone
    }
    for(let key in newObj) {
      if(!newObj[key]) {
        alert('Some inputs is not empty')
        return
      }
    }
    createContact(newObj)
    setName('')
    setPhone('')
    setSurname('')
  }


  return (
    <div className="form">
    <FormControl size="lg" className="my-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

    <FormControl size="lg" className="my-3" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} />

    <FormControl size="lg" className="my-3" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
     <Button onClick={addProduct} >ADD Product</Button>
</div>
  )
}

export default AddProduct