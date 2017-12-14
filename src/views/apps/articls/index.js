import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio} from 'antd';

import '../../../components/component-antd.less';
import styles from '../../../components/component.css';

const Index = ({articls, dispatch}) => {

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
        	文章管理页
        </div>
    );
};

Index.propTypes = {};

const mapStateToProps = (props) => {
    return {
        articls: props.articls
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);