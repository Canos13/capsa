import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import _img from '../images/carreterass.png'
import { Button  } from 'react-bootstrap';
import CardNews from './CardNews';
import Carusel  from './Carusel';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    
    const handlelogin = () => {
        window.location.href = 'https://victum2.eastus2.cloudapp.azure.com/';
    }

    return (
        <section className='_twoColumns contenedor'>
            <section className='_info'>
                <section className='_logo'>
                    <img src={_img} className="_img_logo" alt='logo de victum con capsa' />
                    <h1>Victum Capsa</h1>
                </section>
                <section className='_news'>
                    <CardNews />
                </section>
            </section>
            <section className='_form'>
                <section className='_imgs'>
                    <Carusel />
                </section>
                <section className='_login'>
                    <img src={_img} className="_img_logo_mv" alt='logo de victum con capsa' />
                    <h1 className='text-center mb-3' >Ir a Victum</h1>
                    <Button type="button" className="_login_btn w-100" variant="success" onClick={handlelogin} >
                      <LoginIcon className='mx-2' /><h4 className='d-inline mb-0'>Acceder</h4> 
                    </Button>
                        
                </section>
            </section>
        </section>
    )
}

export default Login