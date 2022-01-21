import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <div className="triangle"></div>
            <div className="triangle-shadow"></div>
            <span>Loading...</span>
        </div>
    )
}

export default Loader
