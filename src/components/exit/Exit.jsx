import React, { Component } from 'react'
import LogOut from '../../assets/images/log-out.png'
import { Logout, Menu_icon } from '../style/styled'

const Exit = () => {
    return (
        <Logout>
            <Menu_icon className="icons">
                <img src={LogOut} alt="" />
            </Menu_icon>
            <p>chiqish</p>
        </Logout>
    )
}


export default Exit;