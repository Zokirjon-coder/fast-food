import styled from "styled-components";

export const ColumnCard = styled.div`
width: calc(100% - 15px);
min-height: 345px;
background: white;
box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
margin: 4px 0;
`

ColumnCard.header = styled.div`
height: 60px;
border-bottom: 1px solid rgba(151, 151, 151, 0.3);
margin: 0 16px;
`

ColumnCard.greenEl = styled.div`
width: 60px;
height: 30px;
background: #20D472;
border-radius: 18px;
font-size: 14px;
line-height: 30px;
letter-spacing: 0.466667px;
text-align: center;
color: #FFFFFF;
margin-right: 10px;
`

ColumnCard.mark = styled.div`
width: 30px;
height: 30px;
background: #EDEFF3;
border-radius: 18px;
display: grid;
place-items: center;
img{
    opacity: .5;
}
`

ColumnCard.time = styled.span`
font-size: 14px;
color: #2D3A45;
margin-left: 10px;
`
ColumnCard.body = styled.div`
height: 136px;
border-bottom: 1px solid rgba(151, 151, 151, 0.3);
margin: 0 16px;
`

ColumnCard.userInf = styled.div`
height: 50%;
display: flex;
padding-top: 17px;
`

ColumnCard.userImg = styled.div`
width: 35px;
height: 100%;
`

ColumnCard.userName = styled.div`
font-size: 16px;
letter-spacing: 0.533333px;
color: #2D3A45;
font-weight: 700;
`

ColumnCard.phone = styled.div`
font-size: 12px;
margin-top: 5px;
letter-spacing: 0.4px;
color: #2D3A45;
opacity: 0.7;
`

ColumnCard.price = styled.div`
height: 50%;
padding: 5px;

.infoPrice{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
}

h1{
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.666667px;
    color: #2D3A45;
    span{
        font-weight: 400;
    }
}
`

ColumnCard.title = styled.span`
font-size: 11px;
letter-spacing: 0.366667px;
color: #8D9BA8;
`

ColumnCard.payme = styled.span`
display: inline-block;
height: 10px;
width: 10px;
border-radius: 50%;
background: #14E5E4;
margin-right: 10px;
`

ColumnCard.footer = styled.div`
height: 100%;
padding: 13px 0;
margin: 0 16px;

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
`

