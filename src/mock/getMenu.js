const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { apiPrefix } = config

let usersListData = Mock.mock({
	'data|80-100': [
		{
			id: '@id',
			name: '@name',
			nickName: '@last',
			phone: /^1[34578]\d{9}$/,
			'age|11-99': 1,
			address: '@county(true)',
			isMale: '@boolean',
			email: '@email',
			createTime: '@datetime',
			avatar () {
				return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
			},
		},
	],
})


let database = usersListData.data

const EnumRoleType = {
	ADMIN: 'admin',
	DEFAULT: 'guest',
	DEVELOPER: 'developer',
}

const userPermission = {
	DEFAULT: {
		visit: ['1', '2', '21', '7', '5', '51', '52', '53'],
		role: EnumRoleType.DEFAULT,
	},
	ADMIN: {
		role: EnumRoleType.ADMIN,
	},
	DEVELOPER: {
		role: EnumRoleType.DEVELOPER,
	},
}

const adminUsers = [{
	id: 0,
	username: 'admin',
	password: 'admin',
	permissions: userPermission.ADMIN,
},{
	id: 1,
	username: 'guest',
	password: 'guest',
	permissions: userPermission.DEFAULT,
},{
	id: 2,
	username: 'xugang',
	password: '123456',
	permissions: userPermission.DEVELOPER,
}]

const queryArray = (array, key, keyAlias = 'key') => {
	if (!(array instanceof Array)) {
		return null
	}
	let data

	for (let item of array) {
		if (item[keyAlias] === key) {
			data = item
			break
		}
	}

	if (data) {
		return data
	}
	return null
}

const NOTFOUND = {
	message: 'Not Found',
	documentation_url: 'http://localhost:8000/request',
}

module.exports = {
    // 登录接口
	[`POST ${apiPrefix}/getMenu`] (req, res) {
		res.json({
			code:200,
			msg:"获取成功！",
			data:{
				"authority":[{
					"resourceId":"4",
					"auths":["0"],
					"primaryName":"",
					"resourceName":"资产管理",
					"menu":"0",
					"type":"0",
					"assignable":"1",
					"modifyTime":1508289793000,
					"resourceUrl":"",
					"createTime":1501811269000,
					"resourceParentid":"",
					"resourceChildid":"",
					"id":95,
					"menuSign":"asset-manage-1"
				},{
					"resourceId":"5",
					"auths":["0"],
					"primaryName":"",
					"resourceName":"其他应用",
					"menu":"0",
					"type":"0",
					"assignable":"1",
					"modifyTime":1511485917000,
					"resourceUrl":"",
					"createTime":1501812090000,
					"resourceParentid":"",
					"resourceChildid":"",
					"id":98,
					"menuSign":"application-2"
				},{
					"resourceId":"5005",
					"auths":["127"],
					"primaryName":"article_manage",
					"resourceName":"其它应用 - CMS管理",
					"menu":"0",
					"type":"0",
					"assignable":"0",
					"modifyTime":1510125870000,
					"resourceUrl":"/admin_article/list_article",
					"createTime":1501828609000,
					"resourceParentid":"5",
					"resourceChildid":"50051",
					"id":125,
					"menuSign":"glyphicon-pencil"
				},{
					"resourceId":"6",
					"auths":["0"],
					"primaryName":"",
					"resourceName":"运营管理",
					"menu":"0",
					"type":"0",
					"assignable":"1",
					"modifyTime":1508463047000,
					"resourceUrl":"",
					"createTime":1502085849000,
					"resourceParentid":"",
					"resourceChildid":"",
					"id":201,
					"menuSign":"system-manage-1"
				},{
					"resourceId":"6002",
					"auths":["3"],
					"primaryName":"sensitive_word",
					"resourceName":"系统设置 - 敏感词管理 ",
					"menu":"0",
					"type":"0",
					"assignable":"0",
					"modifyTime":1504084570000,
					"resourceUrl":"/sensitive/list_word",
					"createTime":1502085944000,
					"resourceParentid":"6",
					"resourceChildid":"",
					"id":203,
					"menuSign":"glyphicon-flash"
				},{
					"resourceId":"6004",
					"auths":["15"],
					"primaryName":"group_manage",
					"resourceName":"系统设置 - 权限组管理 ",
					"menu":"0",
					"type":"0",
					"assignable":"0",
					"modifyTime":1502330870000,
					"resourceUrl":"/user_group/statistics_all_group_limit",
					"createTime":1502086167000,
					"resourceParentid":"6",
					"resourceChildid":"",
					"id":210,
					"menuSign":"glyphicon-credit-card"
				},{
					"resourceId":"18003",
					"auths":["0"],
					"primaryName":"dic_manage",
					"resourceName":"系统管理 - 字典管理",
					"menu":"0",
					"type":"0",
					"assignable":"0",
					"modifyTime":1508292799000,
					"resourceUrl":"/",
					"createTime":1508292784000,
					"resourceParentid":"18",
					"resourceChildid":"",
					"id":343,
					"menuSign":"a"
				},{
					"resourceId":"17003",
					"auths":["0"],
					"primaryName":"running_log",
					"resourceName":"审计管理 - 运营系统日志",
					"menu":"0",
					"type":"0",
					"assignable":"0",
					"modifyTime":1511490255000,
					"resourceUrl":"/",
					"createTime":1511489420000,
					"resourceParentid":"17",
					"resourceChildid":"",
					"id":353,
					"menuSign":"a"
				}]
			}
		})
	
	}
}