import React from 'react'
import {Navbar, NavLink, Form, FormControl,Nav,Button, Container} from 'react-bootstrap'

function Header() {
    return (
        
        <>
  <Navbar collapseOnSelect expanded='sm'  bg="dark" variant="dark">
    <Container>
    <Navbar.Toggle aria-controls='res'/>
    <Navbar.Collapse id='res'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
</>
    )
}

export default Header
