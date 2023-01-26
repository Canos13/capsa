import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HomeButton = ({route,to, icon,title}) => {
    const navigate = useNavigate()
    const handleRedirect = to => {
        if(title==='Proveedores'){
            window.location.href = to
        } else {
            navigate(to)
        }
    }

    return (
        <Button 
            variant={(route===title)?'dark':'outline-dark'} 
            className='d-flex flex-column align-items-center m-2'
            onClick={()=>handleRedirect(to)}
        >   
            {icon}
            <span className='mt-2'>{title}</span>
        </Button>
    )
}

export default HomeButton