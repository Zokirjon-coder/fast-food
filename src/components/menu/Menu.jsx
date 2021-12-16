import React from 'react'
import { dataSidebar } from '../../utils/dataSidebar'
import MenuItem from '../menuItem/MenuItem'
import {
    NavLink,
} from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu">
            {dataSidebar.map(value => {
                return (
                    <NavLink key={value.id} to={value.pathname} style={
                        ({isActive}) => {
                            return{
                                backgroundColor: isActive ?'#FCB600': 'transparent',
                                display: 'block',
                                margin: '5px 50px 5px 0',
                                padding: '5px 0 5px 50px',
                                borderRadius: '0 6px 6px 0',
                                color: isActive ? 'white': '#2D3A45',
                                textDecoration: 'none',
                            }
                        }
                    }><MenuItem data={value}></MenuItem>
                    </NavLink>
                );
            })}
        </div>
    )
}

export default Menu;