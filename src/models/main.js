import { routerRedux } from 'dva/router'
import { getMenuList } from '../services/main'
import { message } from 'antd'

// 导航配置
const navs = require('../config/nav.json');
/**
 * 菜单格式解析
 * @param data
 * @returns {null}
 */
const parseMenus = (data) => {
    if (data == null) {
        return null;
    } else {
        const subData = []
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            if ((d.resourceParentid == "" || d.resourceParentid == null) && d.resourceId != "") {
                subData.push({
                    key: `${i}_1`,
                    id: d.resourceId,
                    txt: d.resourceName,
                    sign: d.menuSign,
                    link: d.primaryName,
                    children: []
                });
            }
        }

        for (let j = 0; j < subData.length; j++) {
            for (let z = 0; z < data.length; z++) {
                if (subData[j].id == data[z].resourceParentid) {
                    const b = data[z].resourceName;
                    const c = b.split(" - ");
                    subData[j].children.push({
                        key: `${z}_2`,
                        id: data[z].resourceId,
                        txt: c[1],
                        link: data[z].primaryName
                    })
                }
            }
        }
        return subData;
    }
};

const specialMenus = ['user_info', 'user_pwd', 'protection_data','protection_config','test'];

export default {
	namespace: 'main',

	state: {
        spinning: true,
        tip: '加载中',
        menus: [],                 // 菜单
        menuLinks: [],             // 二级菜单
        current: '',
        rootSubmenuKeys: [],
        currentRoute: '',         // 当前路由
        collapsed: false,
        nav: [],                  // 导航信息
        auths:[]                  // 每个页面的所有权限
    },

	subscriptions: {
	    setup({ dispatch, history }){ 
			history.listen((path) => {
                (() => {
                	const {pathname} = path;
                    const currentRoute = pathname.substr(1);
                    dispatch({
                        type: 'getMenus',
                        payload: {
                            currentRoute
                        }
                    });
                })();
            })
	    },
    },

	effects: {
		* getMenus({ payload },{ put, call, select }) {
			const {
                currentRoute
            } = payload;
			const res = yield call(getMenuList);
			console.log('res:',res)
			const {authority} = res.data;
			console.log('authority:',authority)
            const menus = parseMenus(authority);
            let menuLinks = [];
            menus.map((m) => {
                m.children.map((c) => {
                    menuLinks.push(c.link);
                });
            });

            menuLinks = menuLinks.concat(specialMenus);

            let rootSubmenuKeys = [],
                current;

            menus.map((d, i) => {
                if (currentRoute != '') {
                    d.children.length > 0 && d.children.map((c, j) => {
                        if (c.link == currentRoute) {
                            current = c.key;
                            rootSubmenuKeys = [`sub${d.key}`];
                        }
                    })
                } else {
                    current = menus[0].children[0].key
                    rootSubmenuKeys = [`sub${menus[0].key}`]
                }
            });
            const route = currentRoute == '' ? menuLinks[0] : currentRoute;
            let realAuth = [];
            authority.map((a)=>{
            	if(a.primaryName != "" && a.primaryName == route){
          			realAuth = a.auths;
            	}
            })
            yield put({
                type: 'setParams',
                payload: {
                    menus,
                    menuLinks,
                    current,
                    rootSubmenuKeys,
                    currentRoute: route,
                    spinning: false,
                    auths:realAuth,
                    nav: navs['article_manage'],
                }
            });

            currentRoute == '' && (yield put(routerRedux.push(`/${route}`)));
		},
	},

	reducers: {
	    setParams(state, {payload}) {
            return {
                ...state,
                ...payload
            };
        }
	},

}