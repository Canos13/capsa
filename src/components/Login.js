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

const Login = () => {

    const [weather, setWeather] = useState(null);
    const APP_ID = '3b7d29e7';
    const APP_KEY = '4b9babb96839deb54fce1361c6f2258b';
    const latlong = '19.04,-98.04'

    useEffect(() => { 
        loadInfo()
    }, [])

    const loadInfo = async () => {
        const res = await fetch(`https://api.weatherunlocked.com/api/current/${latlong}?lang=es&app_id=${APP_ID}&app_key=${APP_KEY}`, { mode: 'no-cors'});
        const data = await res.json();
        setWeather(data);
    }
 
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
                <section className='weather'>
                    {
                        (!weather)?(
                            <h3>Cargando...</h3>
                        ) : (  
                            <Clima weather={weather} />
                        )                        
                    }
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
                        <h1 >Ir a Victum</h1>
                        <div >
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
    )
}

export default Login