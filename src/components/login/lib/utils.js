let regex;
export const minPassword = (value) => regex = new RegExp(`^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{${value},}$`)

const rules = {
	email: (value, fieldValue) => {
		if(!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(fieldValue))
			return 'not valid email'
		return true
	},
	text: (value, fieldValue) => {
		if(!/^[a-zA-Z]+$/g.test(fieldValue)) 
			return 'expected only alphabets'
		return true
	},
	min: (value, fieldValue) => {
		if(fieldValue?.length < value || !fieldValue) {
			return `expected value length is greater than ${value}`
		}
		return true
	},
	max: (value, fieldValue) => {
		if(fieldValue?.length > value || !fieldValue) {
			return `expected value length is less than ${value}`
		}
		return true
	}, 
	password: (value, fieldValue) => {
		if(!regex?.test(fieldValue)) {
			return 'expected letters, numbers, special characters'
		}
		return true
	}
}

export const getResponse = function(name, value, fieldValue) {
	return rules[name](value, fieldValue)
}