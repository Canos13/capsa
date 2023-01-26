import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import _img from '../images/ramal.jpg'
import logoImg from '../images/carreterass.png'
import '../css/Login.css';
import { Button } from 'react-bootstrap';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RestoreIcon from '@mui/icons-material/Restore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeButton from './HomeButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialButton from './SocialButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Layout = ({route,children}) => {

    const navigate = useNavigate()

    const homeButons = [
        { id:4, title :"Proyectos", icon: <AssignmentTurnedInIcon />, to: '/project' },
        { id:2, title :"Historia", icon:  <RestoreIcon />, to: '/history'},
        { id:1, title :"Facturación", icon: <AssignmentTurnedInIcon />, to: '/billing' },
        { id:3, title :"Proveedores", icon: <LocalOfferIcon />, to: 'https://victum-re.online/' },
    ]

    const socialButton = [
        {id: 1, icon: <FacebookIcon />, to:'https://www.facebook.com/' },
        {id: 2, icon: <InstagramIcon />, to:'https://www.instagram.com/' },
        {id: 3, icon: <TwitterIcon />, to:'https://twitter.com/' }
    ]
    const navigateHome = () => navigate('/');
    const navigateVSGA = () => window.location.href = 'https://victum2.southcentralus.cloudapp.azure.com/';
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className='hov' onClick={navigateHome}><h2>Victum Capsa</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav> <img src={logoImg} style={{ width:50 }} alt='Logo capsa' /> </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className='_twoColumns contenedor'>
                <section className='_info'>
                    <section className='_logo'>
                        <HomeIcon onClick={navigateHome} className="_img_logo hov"/>
                        <Button onClick={navigateVSGA} type="button" className="_login_btn w-100" variant="success">
                            <LoginIcon className='mx-2' /><h4 className='d-inline mb-0'>Ir a Victum SGA</h4> 
                        </Button>
                    </section>
                    <section className='d-flex flex-wrap justify-content-around'>
                        {
                            homeButons.map(({id, title, icon,to}) => 
                                <HomeButton 
                                    key={id}
                                    title={title}
                                    icon={icon}
                                    to={to}
                                    route={route}
                                />    
                            )
                        }
                    </section>
                    <hr />
                    <div className='d-flex justify-content-evenly'>
                        {
                            socialButton.map(({id, icon,to})=>
                                <SocialButton 
                                    key={id}
                                    icon={icon}
                                    to={to}
                                />
                            )
                        }
                    </div>
                    <hr />
                    <Card sx={{ display: 'flex', height: 110 }}>
                        <CardMedia
                            component="img"
                            sx={{ width: '35%' }}
                            image={_img}
                            alt=""
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column',width: '65%' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography sx={{ textAlign: 'center' }} component="div" variant="h6">
                                    La nueva autopista
                                </Typography>
                                <Typography variant="subtitle1" color="text.primary" component="div">
                                    A la disminución del tiempo de recorrido se...
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
        
                    
                    {/* <section className='_news'>
                        <CardNews />
                    </section> */}
                </section>
                
                <section className='_form'>
                    {children}
                </section>
            </section>
        </>
    )
}

export default Layout