import React from 'react'
import { dataSidebar } from '../../utils/dataSidebar'
import MenuItem from '../menuItem/MenuItem'
import {
    NavLink,
    Route,
    Routes
} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            <Routes>
            {dataSidebar.map(value => {
                return (
                    <NavLink pathname={value.pathname}><MenuItem key={value} data={value}></MenuItem></NavLink>
                );
            })}
            </Routes>
        </div>
    )
}

export default Menu;