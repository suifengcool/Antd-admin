import React from 'react';
import {connect} from 'dva';
import {Row, Col, Spin, Radio} from 'antd';

import Line from '../../components/echarts/Line';
import Pie from '../../components/echarts/Pie';
import Table from './Table';
import Bar from './Bar'
import '../../components/component-antd.less';
import styles from '../../components/component.css';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Index = ({overview, dispatch}) => {

    const LineOption = {
        xData:['2017/10/12','2017/10/13','2017/10/15','2017/10/16','2017/10/17'],
        sData:[1,3,4,4,1],
        status:1
    };

    const pie1 = {
        sData:[],
        lData:[],
        color: []
    };

    const pie2 = {
        sData:[],
        lData:[],
        color: []
    }; 

    const flawMom = {
        yData: [],
        sData: [[], []]
    };

    return (
        <div className={`${styles['content']} ${styles['margin-top-none']}`}>
        	<div className={styles['content-box-gray']}>
        		<Row gutter={10} type="flex" justify="space-between">
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-3']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>资产总数</h3>
                                    <label style={{fontSize:'30px',color: '#40ee0c'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-4']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>今日综合安全得分</h3>
                                    <label style={{fontSize:'30px',color: '#40ee0c'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-5']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>今日Web攻击总数</h3>
                                    <label style={{fontSize:'30px',color: '#40ee0c'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-6']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>高危漏洞数量</h3>
                                    <label style={{fontSize:'30px',color: 'red'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-6']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>敏感信息总数</h3>
                                    <label style={{fontSize:'30px',color: '#40ee0c'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
        	</div>
            <div className={styles['content-box-gray']}>
                <Row gutter={10} type="flex" justify="space-between">
                    <Col style={{width:'19.5%'}}>
                        <div className={styles['content-box']}>
                            <Row>
                                <Col span={6}>
                                    <div className={styles['icon-3']}></div>
                                </Col>
                                <Col span={18} className={styles['text-right']}>
                                    <h3 style={{color: '#999'}}>今日网络攻击总数</h3>
                                    <label style={{fontSize:'30px',color: '#40ee0c'}}>200</label>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles['content-box-inline']}>
                <div className={styles['content-title']} style={{marginBottom: 25}}>
                    <h2 className={styles['title-left']}>历史安全趋势</h2>
                </div>
                <Row type='flex' justify="space-between">
                    <Col span={12}>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">安全得分</RadioButton>
                            <RadioButton value="b">Web攻击</RadioButton>
                            <RadioButton value="c">网络攻击</RadioButton>
                            <RadioButton value="d">高危漏洞</RadioButton>
                            <RadioButton value="e">敏感信息</RadioButton>
                        </RadioGroup>
                    </Col>
                    <Col span={5}>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">1周</RadioButton>
                            <RadioButton value="b">1个月</RadioButton>
                            <RadioButton value="c">3个月</RadioButton>
                            <RadioButton value="d">半年</RadioButton>
                        </RadioGroup>
                    </Col>
                </Row>
            </div>

            <div className={styles['content-box-inline']}>
                <Row>
                    <Col span={12}>
                        <RadioGroup defaultValue="a">
                            <RadioButton value="a">域名类资产</RadioButton>
                            <RadioButton value="b">IPS类资产</RadioButton>
                        </RadioGroup>
                    </Col>
                </Row>
                <Row style={{marginTop: 2}}>
                </Row>
            </div>

            <Row gutter={10} className={`${styles['margin-top']}`}>
                <Col span={12}>
                    <div className={`${styles['content-box']} ${styles['radius-5']} ${styles['padding-top']}`}>
                        <div className={styles['content-title']}>
                            <h2 className={styles['title-center']}>网络攻击类型TOP5</h2>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={`${styles['content-box']} ${styles['radius-5']} ${styles['padding-top']}`}>
                        <div className={styles['content-title']}>
                            <h2 className={styles['title-center']}>高危漏洞类型TOP5</h2>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row gutter={10} className={`${styles['margin-top']}`}>
                <Col span={12}>
                    <div className={`${styles['content-box']} ${styles['radius-5']} ${styles['padding-top']}`}>
                        <div className={styles['content-title']}>
                            <h2 className={styles['title-center']}>Web攻击类型TOP5</h2>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={`${styles['content-box']} ${styles['radius-5']} ${styles['padding-top']}`}>
                        <div className={styles['content-title']}>
                            <h2 className={styles['title-center']}>敏感信息类型TOP5</h2>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

Index.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Index);