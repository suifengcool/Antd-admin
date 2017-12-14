import React from 'react';

import {deepCopy} from '../utils';

import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';

import {
    barOption
} from './';

const BarChats = ({chartId, option}, barChart) => {
    const _barOption = deepCopy(barOption);
    const {lData, xData, yData, series} = option;

    lData && (_barOption.legend.data = lData);
    xData && (_barOption.xAxis[0].data = xData);
    yData && (_barOption.yAxis[0].data = yData);
    _barOption.series = series;

    barChart.setOption(_barOption);
}


class Bar extends React.Component {
    componentDidMount() {
        const {chartId} = this.props;
        const barChart = echarts.init(document.getElementById(chartId));

        this.setState({barChart});
        BarChats(this.props, barChart);
    }
    componentWillReceiveProps(nextProps) {
        BarChats(nextProps, this.state.barChart)
    }
    render() {
        const {chartId, width, height} = this.props;

        return (
            <div id={chartId} style={{width, height}}></div>
        );
    }
}

export default Bar;