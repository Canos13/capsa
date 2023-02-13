import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Bar() {

    const externalLink = [
        {id: 1, name: 'SGA-Victum', to:'https://victum2.southcentralus.cloudapp.azure.com/'},
        {id: 2, name: 'Proveedores', to:'https://victum-re.online/'},
        {id: 3, name: 'Facturación', to:'https://www.gana-mexico.com.mx/home'},
    ]
    const handleRedirect = to => window.location.href = to;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Link to="/" className='text-white nav-link'><h3>Capsa</h3></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to="/" className='text-white nav-link'>Inicio</Link>                  
                        <Link to="/project" className='text-white nav-link'>Proyecto</Link>
                        <Link to="/history" className='text-white nav-link'>Historia</Link>

                        {
                            externalLink.map(item=><Nav key={item.id} onClick={()=>handleRedirect(item.to)} className='cp text-white nav-link'>{item.name}</Nav>)
                        }
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Bar;