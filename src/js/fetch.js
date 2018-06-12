import request from '../js/request'
import url_config from '@/config'
import qs from 'qs'
export function get(url, data) {
	return request({
		url: url_config + url,
		method: 'get',
		params: data
	})
};
export function post(url, data) {
	return request.post(url_config + url, qs.stringify(data),{ headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }})
}
export function del(url, data) {
	return request.delete(url_config + url, data)
}
export function put(url, data) {
	return request.put(url_config + url,qs.stringify(data))
}
