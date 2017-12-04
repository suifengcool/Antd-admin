import { request, config } from '../utils'

const { api } = config
const { getMenu } = api

export async function getMenuList (data) {
    return request({
	    url: getMenu,
	    method: 'POST',
	    data
    })
}