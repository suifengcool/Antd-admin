import React from 'react';
import { connect } from 'dva';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';

const vulOption = {
    //color: ['#db3155', '#eacc6c', '#3a87cd'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [{
        type : 'value'
    }],
    yAxis : [{
        type : 'category',
        axisTick : {show: false},
        data : ['内网IP地址泄露', 'web应用程序错误', '跨站脚本', '框架注入', '链接注入']
    }],
    series : [{
        //name:'收入',
        type:'bar',
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        data:[320, 302, 341, 374, 390]
    }]
};


const BarChats = ({overview,chartId, option}, barChart) => {
    const {yData, sData} = option;
    const {chartData}= [11, 2, 2, 5, 21]
    barChart.setOption(vulOption);
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

const mapStateToProps = (props) => {
    return {
        overview: props.overview
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bar);