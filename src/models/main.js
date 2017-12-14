import { routerRedux } from 'dva/router'
import { login } from '../services/login'
import { message } from 'antd'

const navs = require('../config/navs.json');

export default {
	namespace: 'main',

	state: {
        // 加载信息
        spinning: true,
        tip: '加载中',
        // 菜单
        menus: [],
        menuLinks: [],
        //sub
        current: '',
        rootSubmenuKeys: [],
        // 当前路由
        currentRoute: '',
        collapsed: false,
        // 导航信息
        nav: [],
        //每个页面的所有权限
        auths:[],
        isHomePage: true
    },

	subscriptions: {
	    setup({dispatch, history}) {
            history.listen((path) => {
                (() => {
                    console.log('1111111')
                    const {pathname} = path;
                    const currentRoute = pathname.substr(1);

                    const route = currentRoute;
                    if (route == '/' || route == '') {
                        dispatch({
                            type: 'setParams', 
                            payload: {isHomePage: true}
                        });
                    }else{
                        dispatch({
                            type: 'setParams', 
                            payload: {isHomePage: false}
                        });
                    }
                    dispatch({
                        type: 'setParams',
                        payload: {
                            currentRoute,
                            nav: navs[route]
                        }
                    });
                })();
            })
        }
    },

	effects: {
		* login({ payload },{ put, call, select }) {
			const data = yield call(login, payload);
			if(data.code === 200){
				message.success('登陆成功')
			}else{
				message.error('登录失败')
			}
		},
	},

	reducers: {
	    setParams(state, {payload}) {
            return {
                ...state,
                ...payload
            };
        },
	},

}