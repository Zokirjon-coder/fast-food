import React from 'react'
import AreaChart from '../../components/chartCard/areaChart'
import ProgressChart from '../../components/chartCard/progressChart'
import {ChartCardBox} from '../../pages/Xisobot/style'

const Charts = ({data}) => {
    return (
        <ChartCardBox>
            <ChartCardBox.Row>
                <AreaChart urlId='chart1' data={data} stroke="#19C655" fill="rgba(25, 198, 85, 0.2385)" />
                <AreaChart urlId='chart2' data={data} stroke="#FA2738" fill="rgba(250, 39, 56, 0.24)" />
            </ChartCardBox.Row>
            <ChartCardBox.Row>
                <ProgressChart urlId='chart1' data={data} stroke="#19C655" fill="rgba(25, 198, 85, 0.2385)" />
            </ChartCardBox.Row>
        </ChartCardBox>
    )
}

export default React.memo(Charts)
