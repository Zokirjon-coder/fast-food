import styled from "styled-components";

export const LocationPanel = styled.div`
width: 950px;
height: calc(100vh - 175px);
position: fixed;
top: ${({ show }) => show ? '85px': '-100%'};
transition: .2s;
z-index: 100;
right: 50px;
background-color: white;
box-shadow: ${({ show }) => show ? '-10px 0 250px black': '0'};
`

LocationPanel.Close = styled.div`
position: absolute;
top: 15px;
right: 15px;
width: 50px;
height: 50px;
background: white;
border-radius: 25px;
display: grid;
place-items: center;
z-index: 100;
box-shadow: -10px 0 250px black;

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button {
  display: block;
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
}
.close-button > div {
  position: relative;
}
.close-button-block {
  width: 40px;
  height: 20px;
  position: relative;
  overflow: hidden;
}
.close-button-block:before, .close-button-block:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: calc(55% - 4px);
  display: block;
  width: 4px;
  height: 25px;
  transform-origin: bottom center;
  background: black;
  transition: all ease-out 280ms;
}
.close-button-block:last-of-type {
  transform: rotate(180deg);
}
.close-button .in .close-button-block:before {
  transition-delay: 280ms;
  transform: translateX(20px) translateY(-20px) rotate(45deg);
}
.close-button .in .close-button-block:after {
  transition-delay: 280ms;
  transform: translateX(-22px) translateY(-22px) rotate(-45deg);
}
.close-button .out {
  position: absolute;
  top: 0;
  left: 0;
}
.close-button .out .close-button-block:before {
  transform: translateX(-5px) translateY(5px) rotate(45deg);
}
.close-button .out .close-button-block:after {
  transform: translateX(5px) translateY(5px) rotate(-45deg);
}
.close-button:hover .in .close-button-block:before {
  transform: translateX(-5px) translateY(5px) rotate(45deg);
}
.close-button:hover .in .close-button-block:after {
  transform: translateX(5px) translateY(5px) rotate(-45deg);
}
.close-button:hover .out .close-button-block:before {
  transform: translateX(-20px) translateY(20px) rotate(45deg);
}
.close-button:hover .out .close-button-block:after {
  transform: translateX(20px) translateY(20px) rotate(-45deg);
}
`