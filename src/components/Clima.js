import React from 'react'
import { Card } from 'react-bootstrap';

const Clima = ({weather}) => {
  return (
      <Card>
          <Card.Body>
            <div>
                <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                <h3>Temperatura {weather.current.temp_c}°</h3>
                <h3> {weather.current.condition.text} </h3>
                <h3> Amozoc de Mota </h3>
            </div>
          </Card.Body>
      </Card>
  )
}

export default Clima;


