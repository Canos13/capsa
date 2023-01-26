import React from 'react'

const SocialButton = ({to,icon}) => {
    return <a className='text-dark mx-3' href={to} target="_blank" rel="noreferrer"> {icon}</a>
}

export default SocialButton