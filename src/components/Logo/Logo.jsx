import React, { Component } from 'react';
import { LogoBar } from '../style/styled';
import logoImg from '../../assets/images/logo.png'

const Logo = () => {
    return (
        <LogoBar background={logoImg}>
            <div className="imgLogo"></div>
            <div className="title">
                <h1>Fast food</h1>
                <p>Online maxsulot sotuvi</p>
            </div>
        </LogoBar>
    )
}

export default Logo;