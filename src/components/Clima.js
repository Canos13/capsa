import React from 'react'

const Clima = ({weather}) => {
  return (
      <div>
          <img src={`/images/${weather.wx_icon}.png`} alt={weather.wx_desc} />
          <h3>Temperatura {weather.temp_c}°</h3>
          <h3> {weather.wx_desc} </h3>
          <h3> Amozoc de Mota </h3>
      </div>
  )
}

export default Clima;


