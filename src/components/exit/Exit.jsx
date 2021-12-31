import React from 'react'
import LogOut from '../../assets/images/log-out.png'
import { Logout, Menu_icon as MenuIcon } from '../style/styled'

const Exit = () => {
    return (
        <Logout>
            <MenuIcon className="icons">
                <img src={LogOut} alt="" />
            </MenuIcon>
            <p>chiqish</p>
        </Logout>
    )
}


export default Exit;