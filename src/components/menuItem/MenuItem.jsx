import React from 'react'
import { Menu_icon as MenuIcon, Menu_item as Menuitem, Menu_title as Menutitle } from '../style/styled'

const MenuItem = (props) => {

    return (
        <Menuitem>
            <MenuIcon className="icons">
                <img src={props.data.image} alt="" />
            </MenuIcon>
            <Menutitle>{props.data.title}</Menutitle>
        </Menuitem>
    )
}

export default MenuItem;