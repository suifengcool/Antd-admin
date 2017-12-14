import { routerRedux } from 'dva/router'
import { login } from '../services/login'
import { message } from 'antd'

export default {
	namespace: 'manageConfig',

	state: {},

	subscriptions: {
	    setup({ dispatch, history }){ 

	    },
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
	    setParams(state, action) {
	        return { 
	        	...state, 
	        	...action.payload 
	        };
	    },
	},

}