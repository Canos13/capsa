import React from 'react'

const Clima = ({weather}) => {
  return (
      <div>
          <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          <h3>Temperatura {weather.current.temp_c}°</h3>
          <h3> {weather.current.condition.text} </h3>
          <h3> Amozoc de Mota </h3>
      </div>
  )
}

export default Clima;


