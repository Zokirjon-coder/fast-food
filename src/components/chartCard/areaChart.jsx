import React from 'react'
import { CardChart } from './style'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CircleBtn, Flex } from '../style/styled'
import calendar from '../../assets/images/calendar.png'
import filter from '../../assets/images/Path1.png'

const chartCard = (props) => {
    const data = props.data;

    return (
        <CardChart>
            <CardChart.Header>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                }}>
                    Yopilgan zakazlar | Barcha fillial
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    13.02.2020 - 19.02.2020
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

                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id={props.urlId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={props.fill} stopOpacity={1} />
                                <stop offset="95%" stopColor={props.fill} stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke={props.stroke} fillOpacity={1} fill={`url(#${props.urlId})`} />
                    </AreaChart>
                </ResponsiveContainer>
            </CardChart.Body>
        </CardChart>
    )
}

export default chartCard
