import React from 'react'
import { connect } from 'dva'
import {Link} from 'dva/router';
import { Button, Input, Spin, Layout, Menu, Dropdown, Breadcrumb, Icon, Avatar, Row, Col, Badge} from 'antd'

import _styles from './index.css';
import styles from '../../components/component.css';
import {components} from '../../router.map';

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

const clientHeight = document.body.clientHeight;
const minHeight = clientHeight - (56 + 45 + 10 + 15);

const Main = ({main, dispatch}) => {
    
    const {currentRoute, nav} = main;

    const menus = [{
        children:[],
        id:1,
        key:"0_1",
        link:"overview",
        sign:"overviewIcon",
        txt:"总览"
    },{
        children:[{
            key: "1_2", 
            id: 2, 
            txt: "图表分析", 
            link: "manage_echarts"
        },{
            key: "5_2", 
            id: "8001", 
            txt: "配置中心", 
            link: "manage_config"
        }],
        id:3,
        key:"1_1",
        link:"manage_echarts",
        sign:"manageIcon",
        txt:"运营管理"
    },{
        children:[{
            key: "2_2", 
            id: "8001", 
            txt: "cms管理", 
            link: "articls"
        }],
        id:4,
        key:"2_1",
        link:"articls",
        sign:"applicationIcon",
        txt:"其他应用"
    },{
        children:[],
        id:5,
        key:"3_1",
        link:"myself",
        sign:"aboutMeIcon",
        txt:"About me"
    }]

    return (
    	<Layout>
            <div style={{height:clientHeight}}>
                <Header className={_styles.header}>
                    <div className={_styles.logo}>
                        logo区域
                    </div>
                    <div className={_styles['header-right']}>
                        <Row>
                            <Col span={4}>
                                <Badge count={6}>
                                    <Icon type="mail" className={styles['icon-size']}/>
                                </Badge>
                            </Col>
                            <Col span={7} style={{padding: '2px 0'}}>
                                <Icon type="question-circle-o" className={styles['icon-size']}/>&nbsp;帮助
                            </Col>
                            <Col span={5}>
                                <Avatar className={_styles.avatar} size="large" icon="user"/>
                            </Col>
                            <Col span={8}>
                                <Dropdown trigger={['click']} overlay={
                                (
                                    <Menu>
                                        <div className={_styles['dropdown-menu']}>
                                            <Row>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <Link to='/user_info'>
                                                        <div style={{margin: '5px 0'}}>
                                                            <div className={`${_styles['content-center']} ${_styles['icon-1']}`}></div>
                                                        </div>
                                                        <div className={styles['font-color-7f8c97']}>基本信息</div>
                                                    </Link>
                                                </Col>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <Link to='/user_pwd'>
                                                        <div style={{margin: '5px 0'}}>
                                                            <div className={`${_styles['content-center']} ${_styles['icon-2']}`}></div>
                                                        </div>
                                                        <div className={styles['font-color-7f8c97']}>密码修改</div>
                                                    </Link>
                                                </Col>
                                                <Col span={8} className={_styles['dropdown-menu-item']}>
                                                    <div style={{margin: '5px 0'}}>
                                                        <div className={`${_styles['content-center']} ${_styles['icon-3']}`}></div>
                                                    </div>
                                                    <div className={styles['font-color-7f8c97']}>告警配置</div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={_styles.logout}>
                                            <a onClick={() => {
                                                dispatch({type: 'main/setParams', payload: {spinning: true, tip: '正在退出系统'}});
                                                dispatch({type: 'auth/logout'});
                                            }}>退出系统</a>
                                        </div>
                                    </Menu>
                                )}>
                                <span>
                                    <Icon style={{color: '#999'}} type="caret-down"/>
                                </span>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Layout className={_styles['layout-margin-top']}>
                    <Sider
                        className={_styles['sider-bg']}
                        trigger={null}
                        style={{minHeight}}
                        width={200}
                    >
                        <div className={_styles['control-label']}>
                            <span>控制台</span>
                        </div>
                        <Menu
                            className={_styles['sider-bg']}
                            theme="dark"
                            mode="inline"
                        >
                            {
                                menus.length && menus.map((m, i) => {
                                    const {txt, link, children, key, sign} = m;
                                    return (
                                        children.length > 0 
                                        ? (
                                            <SubMenu 
                                                key = {`sub${key}`}
                                                title = {
                                                    <Link to={`/${link}`} style={{color:'#eee'}}>
                                                        <Row>
                                                            <Col span={4} style={{padding: '10px 0'}}>
                                                                <div className={_styles[`${sign}`]}></div>
                                                            </Col>
                                                            <Col span={20}>
                                                                {txt}
                                                            </Col>
                                                        </Row>
                                                    </Link>
                                                }
                                            >
                                                {
                                                    children.map((c, j) => {
                                                        return (
                                                            <Menu.Item key={c.key}>
                                                                <Link to={`/${c.link}`} style={{color:'#eee'}}>
                                                                    {c.txt}
                                                                </Link>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </SubMenu>
                                        ) 
                                        : (
                                            <Menu.Item className={_styles['sider-bg']} key={key}>
                                                <Link to={`/${link}`} style={{color:'#eee'}}>
                                                    <Row>
                                                        <Col span={4} style={{padding: '5px 0'}}>
                                                            <Icon className={_styles[`${sign}`]}/>
                                                        </Col>
                                                        <Col span={20}>
                                                            {txt}
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    )
                                })}
                        </Menu>
                    </Sider>
                    <Layout className={_styles['layout-content-margin-top']} className={_styles['fixIE10Flex']}>
                        <div className={_styles.breadcrumb}>
                            {/*
                                nav.map((d, i) => {
                                    return (
                                        <div key={i}>{d}</div>
                                    )
                                })
                            */}
                        </div>
                        <Content className={`${_styles['content-margin-top']} ${styles['popup-container']}`}
                            style={{minHeight}} id='popup-container'>
                            {
                                components[currentRoute] || ''
                            }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </Layout>
    )
}

const mapStateToProps = (props) => {
    return {
  		main: props.main
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
