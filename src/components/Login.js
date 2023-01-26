import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import Clima from './Clima';
import Layout from './Layout';
import { Skeleton } from 'antd';

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

    return (
        <Layout>
            <>
                <section className='_login d-flex'>
            
                    <section className='weather px-3'>
                        {
                            (!weather) ? (
                                <Skeleton
                                    className='p-3'
                                    active 
                                    avatar
                                    paragraph={{
                                        rows: 4,
                                    }}
                                />
                            ) : (  
                                <Clima weather={weather} />
                            )                         
                        }
                    </section>

                    <iframe className='rounded-2' title='mymap' src="https://www.google.com/maps/d/u/0/embed?mid=12JXSdngxC23BsK0iyooW8z2yrBwwY78&ehbc=2E312F" width="55%" height="400"></iframe>

                </section>
                {/* <section className='_imgs'>
                    <Carusel />
                </section> */}
            </>
        </Layout>
    )
}

export default Login