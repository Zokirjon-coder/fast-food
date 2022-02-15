import styled from "styled-components";

export const TypeBook = styled.div`
height: 100%;
flex: 1;
background: white;
display: flex;
justify-content: center;
align-items: center;
`

TypeBook.type = styled.div`
width: 591px;
height: 48px;
background: var(--grey);
border-radius: 48px;
opacity: ${({isDisabled}) => isDisabled ? .3 : 1};
cursor: ${({isDisabled}) => isDisabled ? "not-allowed" : "cursor"};
`

TypeBook.name = styled.div`
background: ${({ active }) => active ? 'white' : 'transparent'};
width: 162px;
height: 36px;
display: grid;
place-items: center;
font-size: 14px;
color: #2D3A45;
opacity: ${({ active }) => active ? '1' : '0.4'};
cursor: pointer;
pointer-events: ${({isDisabled}) => isDisabled ? "none" : "all"};
user-select: none;
border-radius: 36px;
margin: 0 5px;
transition: .2s;
box-shadow: 0px 2px 2px ${({ active }) => active ? "rgba(174, 176, 181, 0.314986)" : "tansparent"};
`

export const ShowType = styled.div`
min-width: 169px;
height: 100%;
background: white;
margin-left: 2px;
display: flex;
align-items: center;
justify-content: center;
`

ShowType.box = styled.div`
width: 97px;
height: 48px;
background: #EDEFF3;
border-radius: 48px;
display: flex;
align-items: center;
justify-content: space-between;
`

ShowType.btn = styled.div`
width: 36px;
height: 36px;
border-radius: 18px;
margin: 0 6px;
background: ${({ isActive }) => isActive ? "white" : "transparent"};
display: flex;
align-items: center;
justify-content: center;
gap: 2px;
transition: .2s;
cursor: pointer;
box-shadow: 0px 2px 2px ${({ isActive }) => isActive ? "rgba(174, 176, 181, 0.314986)" : "tansparent"};
& span{
    border: 1px solid #8D9BA8;
    border-radius: 6px;
    background: ${({ isActive }) => isActive ? "#8D9BA8" : "tansparent"};
    opacity: ${({ isActive }) => isActive ? "1" : ".4"};
}
&.column span{
    width: 6px;
    height: 10px;
    margin-top: -4px;
    &:nth-child(1){
        margin-top: 0;
        height: 14px;
    }
}
&.row{
    flex-direction: column;
    span{
        width: 14px;
        height: 6px;
    }
}  
`

export const Conatiner = styled.div`
padding: 20px 30px 15px 20px;
height: calc(100% - 80px);
`

export const Wrapper = styled.div`
display: flex;
height: 100%;
overflow: scroll;
::-webkit-scrollbar{
    max-height: 50%; 
    height: 50%;
    width: 5px;
}

::-webkit-scrollbar-button{
    max-height: 10px;
    border-radius: 5px;
    background-color: #000;
    height: 15px;
}
::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color: #FCB600;
    height: 15px;
}
`;

Wrapper.column = styled.div`
display: flex;
flex-direction: column;
height: 100%;
flex: 1;
width: 100%;
`

export const ColumnName = styled.div`
color: #2D3A45;
font-size: 14px;
text-transform: capitalize;
display: flex;
margin: 3px 0;
`

ColumnName.length = styled.span`
    width: 30px;
    height: 20px;
    display: grid;
    place-items: center;
    margin-left: 12px;
    background: white;
    border-radius: 4px;
`

export const CradSumm = styled.div`
width: calc(100% - 15px);
min-height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
background: white;
padding: 0 16px;
border-radius: 6px;
font-weight: 900;
`

CradSumm.indikator = styled.span`
padding: 7px;
border-radius: 7px;
background: ${({bg})=>bg};
`