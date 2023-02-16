import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImg = ({Data}) => {

    const [index, setIndex] = useState(0);
    const handleSelect = selectedIndex => setIndex(selectedIndex)

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            {
                Data && Data.map(item =>        
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt="slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default CarouselImg;