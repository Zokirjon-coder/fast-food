import React from 'react'
import { CardChart, Chart } from './style'
import { CircleBtn, Flex } from '../style/styled'
import calendar from '../../assets/images/calendar.png'
import filter from '../../assets/images/Path1.png'

const chartCard = (props) => {
    const data = props.data;

    return (
        <CardChart.Progress>
            <CardChart.Header>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    To'lov turlari | Xadra
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    19.02.2020
                    <CircleBtn param={{ diametr: "26", borderWidth: "4" }} style={{ marginLeft: "10px" }}>
                        <Flex className="centered">
                            <img style={{ borderRadius: 0 }} style={{
                                width: '70%'
                            }} src={calendar} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn param={{ diametr: "26", borderWidth: "4" }} style={{ marginLeft: "10px" }}>
                        <Flex className="centered">
                            <img style={{ borderRadius: 0 }} style={{
                                width: '70%'
                            }} src={filter} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </CardChart.Header>
            <CardChart.Body>
                <Chart.Row>
                    <Chart.ChartLeft clr='rgb(255, 204, 0)'>
                        <span></span>
                        <p>Terminal - <span>1,200,000 UZS</span></p>
                    </Chart.ChartLeft>
                    <Chart.ChartRight>
                        <Chart.Progress  clr='rgb(255, 204, 0)' persent='45'>
                            <span></span>
                        </Chart.Progress> 
                        <span style={{marginLeft: '15px'}}>45%</span>
                    </Chart.ChartRight>
                </Chart.Row>
                <Chart.Row>
                    <Chart.ChartLeft clr='rgb(0, 255, 34)'>
                        <span></span>
                        <p>Naqd - <span>1,350,000 UZS</span></p>
                    </Chart.ChartLeft>
                    <Chart.ChartRight>
                        <Chart.Progress  clr='rgb(0, 255, 34)' persent='65'>
                            <span></span>
                        </Chart.Progress> 
                        <span style={{marginLeft: '15px'}}>65%</span>
                    </Chart.ChartRight>
                </Chart.Row>
                <Chart.Row>
                    <Chart.ChartLeft clr='rgb(0, 247, 255)'>
                        <span></span>
                        <p>Payme - <span>1,280,000 UZS</span></p>
                    </Chart.ChartLeft>
                    <Chart.ChartRight>
                        <Chart.Progress  clr='rgb(0, 247, 255)' persent='55'>
                            <span></span>
                        </Chart.Progress> 
                        <span style={{marginLeft: '15px'}}>55%</span>
                    </Chart.ChartRight>
                </Chart.Row>
                <Chart.Summ>3,830,000 UZS</Chart.Summ>
            </CardChart.Body>
        </CardChart.Progress>
    )
}

export default chartCard
