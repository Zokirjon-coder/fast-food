import styled from "styled-components"

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

export const ChartCardBox = styled.div`
padding: 20px 38px;
`

ChartCardBox.Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
column-gap: 10px;
margin-bottom: 10px;
`