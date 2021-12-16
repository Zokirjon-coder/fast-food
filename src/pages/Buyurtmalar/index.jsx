import React from 'react'
import { useLocation } from 'react-router-dom'

const Buyurtmalar = (props) => {
    const location = useLocation()
    return (
        <div>
            {location.pathname}
        </div>
    )
}

export default Buyurtmalar
