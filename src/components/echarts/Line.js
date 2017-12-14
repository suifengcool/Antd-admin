import React from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

let lineOption = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:[]
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : []
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'line',
            stack: '总量',
            data:[]
        }
    ]
};

const setOption = ({chartId, option}, lineChart) => {
    const {xData,sData,lineName} = option;
    lineOption.xAxis[0].data = xData;
    lineOption.series[0].data = sData;
    lineOption.series[0].name = lineName;
    // lineOption.legend.data = lineName.split(",");

    lineChart.setOption(lineOption);
}

class Line extends React.Component {
    componentDidMount() {
        const {chartId} = this.props;
        const lineChart = echarts.init(document.getElementById(chartId));

        this.setState({lineChart});
        setOption(this.props, lineChart);
    }

    componentWillReceiveProps(nextProps) {
        setOption(nextProps, this.state.lineChart);
    }

    render() {
        const {chartId, width, height} = this.props;

        return (
            <div id={chartId} style={{width, height}}></div>
        );
    }
}

export default Line;