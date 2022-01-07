import styled from "styled-components";

export const RowCard = styled.div`
width: 878px;
min-height: 150px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
margin-bottom: 12px;
display: grid;
grid-template-columns: 198px 227px 252px 201px;
`;

RowCard.Header = styled.div`
border-right: 1px solid #EDEFF3;
`
RowCard.BodyUser = styled.div`
border-right: 1px solid #EDEFF3;
`
RowCard.BodyPrice = styled.div`
border-right: 1px solid #EDEFF3;
`
RowCard.Footer = styled.div`
padding: 30px 0 0 30px;
position: relative;
span{
    font-size: 11px;
    line-height: 18px;
    letter-spacing: 0.366667px;
    color: #8D9BA8;
}
p{
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.466667px;
    color: #2D3A45;
    font-weight: 600;
}
button{
    all: unset;
    position: absolute;
    width: 40px;
    height: 40px;
    right: -20px;
    bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 50%;
    border: 4px solid #E5E5E5;
    display: grid;
    place-items: center;
    &:hover{
        transform: scale(.9)
    }
}
.topBtn{
        top: 20px;
    }
`

RowCard.greenEl = styled.div`
width: 90px;
height: 36px;
background: #20D472;
border-radius: 18px;
font-size: 20px;
line-height: 36px;
letter-spacing: 0.466667px;
text-align: center;
color: #FFFFFF;
margin-right: 10px;
`

RowCard.mark = styled.div`
width: 36px;
height: 36px;
background: #EDEFF3;
border-radius: 18px;
display: grid;
place-items: center;
img{
    opacity: .5;
}
`
RowCard.time = styled.span`
font-size: 20px;
color: #2D3A45;
`

export const HeaderTop = styled.div`
display: flex;
justify-content: center;
height: 50%;
align-items: flex-start;
padding-top: 20px;
`
export const HeaderBottom = styled.div`
display: flex;
justify-content: center;
height: 50%;
align-items: flex-end;
padding-bottom: 39px;
img{
    margin: 0 12px 4px 0;
}
`

RowCard.userName = styled.div`
font-size: 20px;
letter-spacing: 0.533333px;
color: #2D3A45;
font-weight: 700;
width: 109px;
white-space: wrap;
`

RowCard.phone = styled.div`
font-size: 14px;
margin-top: 5px;
letter-spacing: 0.4px;
color: #2D3A45;
opacity: 0.7;
`

export const BodyTop = styled.div`
display: flex;
justify-content: flex-start;
column-gap: 17px;
height: 50%;
align-items: center;
padding-top: 20px;
img{
    margin: 0 12px 4px 35px;
}
`
export const BodyBottom = styled.div`
display: flex;
justify-content: flex-start;
column-gap: 17px;
height: 50%;
align-items: center;
padding-bottom: 20px;
img{
    margin: 0 12px -4px 35px;
}
`

export const PriceTop = styled.div`
display: flex;
justify-content: flex-start;
column-gap: 17px;
height: 50%;
padding-top: 30px;
img{
    margin: 5px 12px 4px 35px;
}

.prices{
    .center{
        display: flex;
        align-items: center;
        margin-top: -5px;
        font-size: 14px;
        letter-spacing: 0.466667px;
        color: #2D3A45;
        font-weight: 600;
        img{
            width: 22px;
        }
    }
}
`

export const PriceBottom = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
column-gap: 17px;
height: 50%;
padding: 0 35px 0;
img{
    margin: 0 12px -4px 35px;
}

& > span{
font-size: 11px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
}

h2{
font-size: 20px;
line-height: 18px;
letter-spacing: 0.666667px;
color: #2D3A45;
& span{
    font-weight: 400;
}
}
`

PriceTop.payme = styled.span`
display: inline-block;
height: 10px;
width: 10px;
border-radius: 50%;
background: #14E5E4;
margin: 0 10px 0 10px;
`