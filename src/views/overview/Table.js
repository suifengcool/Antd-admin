import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Table, Button, Popconfirm} from 'antd';
import '../../components/component-antd.less';
import styles from '../../components/component.css';

const OverviewTable = ({oerview, dispatch}) => {

	const attackList = [{
		key: 12,
		index: 1,
		assetName: '搜索引擎',
		domain_id: 'www.baidu.com',
		status: ['1','2','3'],
		attackNum: 12,
		highRisk: 8,
		sensitive: 4,
		score: 75
	}];

	const confirm = (e) => {
	    console.log(e);
	};

	const cancel = (e) => {
	    console.log(e);
	};

	const showDetail = (record) => {
		console.log('record:',record)
		dispatch({
			type: 'netInvadeDefend/setParams',
			payload: {
				detailModalVisible: true
			}
		})
	};
	
	const params = {
		columns: [{
			title: '序号',
			dataIndex: 'index',
		},{
			title: '资产名称',
			dataIndex: 'assetName'
		},{
			title: '域名',
			dataIndex: 'domain_id'
		},{
			title: '防护状态',
			dataIndex: 'status'
		},{
			title: '今日攻击数',
			dataIndex: 'attackNum'
		},{
			title: '高危漏洞',
			dataIndex: 'highRisk'
		},{
			title: '敏感信息',
			dataIndex: 'sensitive'
		},{
			title: '安全得分',
			dataIndex: 'score'
		}],
		dataSource: attackList,
		bordered: true,
		size: "middle"
	};

	return (
		<Table {...params} />
	);
};

OverviewTable.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewTable);