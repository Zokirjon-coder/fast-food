import styled from "styled-components";

export const DROWER = styled.div`
width: 300px;
height: calc(100vh - 85px);
position: fixed;
top: 85px;
transition: .2s;
z-index: 100;
right: ${({ show }) => show ? 0: '-300px'};
background-color: white;
box-shadow: ${({ show }) => show ? '-10px 0 250px black': '0'};
.container{
    padding: 32px 24px;
    width: 100%;
    height: 100%;

    h1{
        font-size: 16px;
        margin-bottom: 16px;
    }

    p.titleInp{
        font-size: 12px;
        color: #2D3A45;
        margin-bottom: 5px;
    }

    .inp{
        margin-top: 5px;
        position: relative;

        input, select{
            width: 100%;
            height: 40px;
            border-radius: 2px;
            border: 1px solid var(--grey);
            padding: 13px;
            font-size: 12px;
            outline: 0;
            color: #2D3A45;
        }
        select{
            padding: 0 13px;
        }

        #file{
            appearance: none;
            -webkit-appearance: none;
            -o-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            height: 60px;
        }

        img{
            position: absolute;
            inset: 0;
            margin: auto;
            width: 22px;
            height: 18px;
            pointer-events: none;
        }
        span{
            display: block;
            pointer-events: none;
            color: #2D3A45;
            text-align: center;
            font-size: 12px;
            position: relative;
            bottom: 10px;
        }
    }

    .inp.time{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .times{
            display: flex;
            gap: 15px;
        }
    }

    .btn{
        position: absolute;
        bottom: 32px;
        left: 24px;
        button{
            border-radius: 2px;
            height: 35px;
            width: 118px;
            padding: 0; 
            text-align: center;
            border: 0;
            outline: 0;
            background: #20D472;
            &:hover{
                filter: brightness(.8);
                color: white;
            }
        }
    }
    .check{
        user-select: none;
        display: flex;
        justify-content: flex-start;
        column-gap: 15px;
        align-items: center;
        margin-top: 10px;
        font-size: 12px;
        input{
            --webkit-appearance: none;
            appearance: none;
            padding: 8px;
            border: 1px solid var(--main-color);
            border-radius: 2px;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                background: var(--main-color);
                padding: 5px;
                border-radius: 2px;
                transition: all .2s;
            }

            &:not(:checked){
                border-color: var(--grey);
            }
            
            &:hover{
                border-color: var(--main-color);
            }
            
            &:not(:checked)::before{
                transform: scale(0);
            }
        }
    }
}
`
DROWER.CloseBtn = styled.div`
position: absolute;
z-index: -1;
top: 55px;
transition: .2s;
left: ${({ show }) => !show ? 0: '-55px'};;
width: 55px;
height: 50px;
background: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 25px 0 0 25px;
&::after, &::before{
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 2px;
    height: 12px;
    background: black;
}
&::after{
    transform: translate(-50%, -50%) rotate(45deg);
}
&::before{
    transform: translate(-50%, -50%) rotate(-45deg);
}
`