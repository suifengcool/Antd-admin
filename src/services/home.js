import { request, config } from '../utils'

const { api } = config
const { getList } = api

export async function getNavList (data) {
    return request({
	    url: getList,
	    method: 'post',
	    data
    })
}