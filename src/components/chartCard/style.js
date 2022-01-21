import styled from 'styled-components';

export const CardChart = styled.div`
width: 100%;
height: 253px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
`

CardChart.Progress = styled.div`
width: calc(50% - 5px);
height: 253px;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 6px;
`

CardChart.Header = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 24px;
font-size: 12px;
font-weight: 600;

background: #FFFFFF;
box-shadow: 0px 2px 6px rgba(174, 176, 181, 0.314986);
border-radius: 6px 6px 0px 0px;
`

CardChart.Body = styled.div`
height: 200px;
font-size: 12px;
`

export const Chart = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

Chart.Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 30px;
padding: 0 24px;
`
Chart.ChartLeft = styled.div`
display: flex;
align-items: center;
width: 45%;
 > span{
    display: block;
    width: 10px;
    height: 10px;
    background: ${({ clr }) => clr};
    border-radius: 50%;
}
> p {
    font-weight: 600;    
    margin-left: 15px;
    
    > span{
        color: grey;
}
}
`
Chart.ChartRight = styled.div`
display: flex;
align-items: center;
width: 55%;
`

Chart.Progress = styled.div`
width: 200px;
background: var(--grey);
border-radius: 7px;
height: 7px;
overflow: hidden;
box-shadow: 0px 2px 6px rgba(174, 176, 181, 0.314986);
>span{
    background: ${({clr}) => clr};
    width: ${({persent}) => persent}%;
    display: block;
    height: 100%;
    border-radius: 10px;
}
`

Chart.Summ = styled.div`
width: 140px;
height: 40px;
background: var(--grey);
margin: 15px 0 0 24px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 15px;
`