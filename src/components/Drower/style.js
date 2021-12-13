import styled from "styled-components";

export const DROWER = styled.div`
width: 300px;
height: 100vh;
position: fixed;
top: 0;
transition: .2s;
z-index: 100;
right: ${({ show }) => show ? 0: '-300px'};
background-color: white;
box-shadow: ${({ show }) => show ? '-10px 0 250px black': '0'};
`
DROWER.CloseBtn = styled.div`
position: absolute;
top: 55px;
transition: .2s;
left: ${({ show }) => !show ? 0: '-55px'};;
width: 55px;
height: 25px;
background: white;
`