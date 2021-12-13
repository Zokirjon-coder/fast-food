import React, { Component } from 'react';
import { SidebarContainer } from '../style/styled';
import Logo from '../Logo/Logo';
import Menu from '../menu/Menu';
import Exit from '../exit/Exit'

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Logo />
                <Menu />
                <Exit />
            </SidebarContainer>
        </>
    )
}


export default Sidebar;