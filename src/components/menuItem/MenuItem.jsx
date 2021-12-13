import React from 'react'
import { Menu_icon, Menu_item, Menu_title } from '../style/styled'

const MenuItem = (props) => {

    return (
        <Menu_item>
            <Menu_icon className="icons">
                <img src={props.data.image} alt="" />
            </Menu_icon>
            <Menu_title>{props.data.title}</Menu_title>
        </Menu_item>
    )
}

export default MenuItem;