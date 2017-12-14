import React from 'react';
import echarts from 'echarts/lib/echarts';

import {deepCopy} from '../../utils/utils';

import 'echarts/lib/chart/pie';

import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

let pieOption = {
    color: [],
    title: {
        text: ''
    },
    //tooltip: {
    //  formatter: "{b} : {c} ({d}%)"
    //},
    legend: {
        x: 'center',
        y: 'bottom'
    },
    series: [{
        name: '',
        type: 'pie',
        radius: '50%',
        center: ['50%', '45%'],
        selectedMode: 'single',
        selectedOffset: 0,
        roseType: false,
        label: {
            normal: {}
        },
        data: [],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

const pieColor = [
    '#db3155', '#eacc6c', '#3a87cd',
    '#a77a88', '#6996ba', '#98c6dc',
    '#e2a9a3', '#58dee2', '#d8f7a9',
    '#8fc2cd', '#25ade4', '#f7e8d9',
    '#3d6a99', '#da3154', '#654396'
];

const PieChats = ({chartId, option}, pieChart) => {
    const _pieOption = deepCopy(pieOption);
    const {lData, lFormatter, sData, sFormatter, roseType} = option;
    if (sData.length == 0) {
        _pieOption.series[0].data.push({name: '暂无数据', value: 0});
        _pieOption.series[0].label.normal.formatter = null;
    } else {
        _pieOption.legend.data = lData;
        lFormatter && (_pieOption.legend.formatter = lFormatter);
        _pieOption.series[0].data = sData;
        sFormatter && (_pieOption.series[0].label.normal.formatter = sFormatter);
    }

    _pieOption.color = pieColor;
    roseType && (_pieOption.series[0].roseType = roseType);

    pieChart.setOption(_pieOption);
}

class Pie extends React.Component {
    componentDidMount() {
    	const {chartId} = this.props;
    	const pieChart = echarts.init(document.getElementById(chartId));
    	
    	this.setState({pieChart});
        PieChats(this.props, pieChart);
    }
    componentWillReceiveProps(nextProps) {
        PieChats(nextProps, this.state.pieChart);
    }
    render() {
        const {chartId, width, height} = this.props;

        return (
            <div id={chartId} style={{width, height}}></div>
        );
    }
}

export default Pie;