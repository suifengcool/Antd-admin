import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio} from 'antd';

import '../../../components/component-antd.less';
import styles from '../../../components/component.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Index = ({manageConfig, dispatch}) => {

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
        	运营管理-配置中心页
        </div>
    );
};

Index.propTypes = {};

const mapStateToProps = (props) => {
    return {
        manageConfig: props.manageConfig
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);