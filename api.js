import axios from 'axios'

export default function api() {
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	axios.defaults.baseURL = 'http://192.168.1.6:3001/api'
	axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
	
	return axios
}