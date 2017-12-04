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
	[`POST ${apiPrefix}/getList`] (req, res) {
			res.json({ 
				code: 200,
				data: null,
				msg: '获取成功',
			})
		// const { username, password } = req.body
		// const user = adminUsers.filter(item => item.username === username)

		// if (user.length > 0 && user[0].password === password) {
		// 	const now = new Date()
		// 	now.setDate(now.getDate() + 1)
		// 	res.cookie('token', JSON.stringify({ id: user[0].id, deadline: now.getTime() }), {
		// 		maxAge: 900000,
		// 		httpOnly: true,
		// 	})
		// 	res.json({ 
		// 		code: 200,
		// 		data: null,
		// 		msg: '登陆成功',
		// 	})
		// } else {
		// 	// res.status(400).end()
		// 	res.json({ 
		// 		code: 500,
		// 		data: null,
		// 		msg: '账号或者密码错误',
		// 	})
		// }
	},
}