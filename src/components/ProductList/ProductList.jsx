import React, { useContext, useEffect } from 'react'
import { contactsContext } from '../../productContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const {contacts, getContacts, deleteContact} = useContext(contactsContext)

  const navigate = useNavigate()
  useEffect(() => {
    getContacts()
  })

  return (
    <>
      {contacts.map((item) => (
        <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Title>{item.surname}</Card.Title>
          <Card.Text>
              {item.phone}
          </Card.Text>
          <Button variant="dark" onClick={() => navigate(`/edit/${item.id}`)} >Edit</Button>
          <Button style={{marginLeft: '1rem'}} onClick={() => deleteContact(item.id)} variant="danger">Delete</Button>
        </Card.Body>
      </Card>
        </div>
      ))}
    </>
  )
}

export default ProductList