import styled from 'styled-components'

export const NotiContainer = styled.div`
height: calc(100% - 80px);
padding: 20px;
`

export const Noti = styled.div`
padding: 20px;
background: white;
border-radius: 10px;
`

Noti.Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.NotiHeading{
    all: unset;
    width: 250px;
    padding-left: 20px;
    height: 40px;
    border-radius: 20px;
    background: var(--grey);
    font-size: 12px;
    color: grey;
}
.selectBox{
    display: flex;
    align-items: center;
    background: var(--grey);
    height: 40px;
    padding: 0 15px;
    border-radius: 20px;
    select{
        background: var(--grey);
        color: grey;
        text-transform: capitalize;
        font-size: 12px;
        height: 40px;
        border: 0;
        outline: 0;
        padding: 0 5px;
        cursor: pointer;
    }
}
`
Noti.Comment = styled.div`
    margin-top: 15px;
    background: var(--grey);
    height: 150px;
    border-radius: 20px;
    padding: 20px;
    textarea{
        width: 100%;
        height: 100%;
        resize: none;
        border: 0;
        outline: 0;
        background: transparent;
        color: grey;
        font-size: 12px;
    }
`

Noti.Upload = styled.div`
margin-top: 15px;
position: relative;
height: 120px;
border-radius: 20px;
padding: 20px;
background: var(--grey);
border: 2px dashed #03053D;
overflow: hidden;
input[type="file"]{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
.heading, span, img{
    pointer-events: none;
}
img{
    width: 50px;
}

span{
    font-size: 25px;
    font-weight: 900;
    color: #03053D;
}
.heading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
`
Noti.Btns = styled.div`
margin-top: 15px;
text-align: right;
button{
margin-left: 10px;
height: 40px;
border-radius: 20px;
border: 0;
outline: 0;
padding: 0 42px;
font-weight: 700;
cursor: pointer;
&:hover{
    filter: brightness(0.9);
}
}

button[type='reset']{
    border: 2px solid var(--grey);
    background: transparent;
}
button[type='button']{
    background: #09A92C;
    color: white;
}
`