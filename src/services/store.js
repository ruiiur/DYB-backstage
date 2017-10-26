import fetch from '../common/fetch'

//登录
export const getFoods = (params) => fetch({
	'url': '/api/food/goodinfo/getgoodinfos',
	'method': 'get',
	'params': params,
	'accredit': true
});