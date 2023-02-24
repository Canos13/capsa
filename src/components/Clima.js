import React from 'react'
import { Carousel } from 'antd';

const Clima = ({weather}) => {
  return (
    <Carousel autoplay dotPosition='top'>
      {
          weather.length > 0 && (
            weather.map(clima => 
            <div key={clima?.location?.name}>
              <img src={clima.current.condition.icon} alt={clima.current.condition.text} className='mx-auto' />
              <h3>Temperatura {clima.current.temp_c}°</h3>
              <h3> {clima.current.condition.text}. </h3>
              <h3> {(clima?.location?.name === 'Guadalupe Sarabia') ? 'Cantona' : clima?.location?.name}, {clima?.location?.region}.</h3>
            </div>)
          )
      }
    </Carousel>
  )
}

export default Clima;


