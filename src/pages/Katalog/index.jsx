import React from 'react'
import { useLocation } from 'react-router-dom'

const Katalog = (props) => {
    const location = useLocation()
    return (
        <div>
            {location.pathname}
        </div>
    )
}

export default Katalog
