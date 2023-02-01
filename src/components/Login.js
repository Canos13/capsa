import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import _img from '../images/carreterass.png'
import { Button  } from 'react-bootstrap';
import CardNews from './CardNews';
import Carusel  from './Carusel';
import LoginIcon from '@mui/icons-material/Login';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Clima from './Clima';
import Navbar from './Navbar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => { 
        ( async (city = "Amozoc de Mota") =>{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e648ba191b6b48ab875162613221312&q=${encodeURI(city)}}&aqi=no&lang=es`);
            const data = await response.json();
            console.log(data)
            setWeather(data);
        } )()
    }, [])
 
    const handlelogin = () => window.location.href = 'https://victum2.southcentralus.cloudapp.azure.com/';

    return (
        <>
            <Navbar />
            <section className='_twoColumns contenedor'>
                <section className='_info'>
                    <section className='_logo'>
                        <img src={_img} className="_img_logo" alt='logo de victum con capsa' />
                    </section>
                    <section className='weather'>
                        {
                            (!weather)?(
                                <h3>Cargando...</h3>
                            ) : (  
                                <Clima weather={weather} />
                            )                         
                        }
                    </section>
                    <section className=' mt-3'>
                        <section className='d-flex align-items-center justify-content-around'>
                            <a  href='tel:8008368580' target="_blank" rel="noreferrer"><LocalPhoneIcon className='text-success fts-5' /></a>
                            <a href='https://play.google.com/store/apps/details?id=com.gigigo.aleatica' target="_blank" rel="noreferrer">
                                <img src={_img} className="_img_logo_app" alt='logo de victum con capsa' />
                            </a>
                            <a href='mailto:atencionusuariosgana@ganamexico.com.mx' target="_blank" rel="noreferrer"><EmailIcon className='text-success fts-5' /></a>
                        </section>
                        <section className='text-center'>
                            <a href='https://play.google.com/store/apps/details?id=com.gigigo.aleatica' target="_blank" rel="noreferrer" className='des_app'>
                                <h5 className='mt-3'>Descarga la App de aleática</h5>
                            </a>
                                <h5>Tels: 800 836 8580 y 800 8363580</h5>
                                <h6 className='correo'>atencionusuariosgana@ganamexico.com.mx</h6>
                        </section>    
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

                        <div className='d-flex align-items-center justify-content-around mb-2'>
                            <h1>Auxilio Vial</h1>
                            <div>
                                <a className='text-success' href='https://www.facebook.com/' target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                <a className='text-success mx-3' href='https://www.instagram.com/' target="_blank" rel="noreferrer"><InstagramIcon /></a>
                                <a className='text-success' href='https://twitter.com/' target="_blank" rel="noreferrer"><TwitterIcon /></a>
                            </div>
                        </div>

                        <Button type="button" className="_login_btn w-100" variant="success" onClick={handlelogin} >
                        <LoginIcon className='mx-2' /><h4 className='d-inline mb-0'>Acceder</h4> 
                        </Button>
                    
                        <iframe title='mymap' src="https://www.google.com/maps/d/u/0/embed?mid=12JXSdngxC23BsK0iyooW8z2yrBwwY78&ehbc=2E312F" width="100%" height="480"></iframe>
                    
                    </section>
                </section>
            </section>
        </>
    )
}

export default Login