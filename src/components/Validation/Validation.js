const validations = {
	required: value => {
		if (typeof value === 'string') {
			return value.length ? undefined : 'Field required.'
		}
		return value ? undefined : 'Field required.';
	},
	passwordsMustMatch: (firstPassword, secondPassword) => {
			if (firstPassword !== secondPassword) {
				return 'Passwords do not match.'
			} return undefined;
	},
	mustBeEmail: value => {
		return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			value
		)
			? 'Invalid e-mail format.'
			: undefined
	},
	mustBePassword: password => {
		if (password && password.length < 7) {
			return 'Password must be at least 7 characters long.'
		} return undefined;
	},
};

export const composeValidators = (...validators) => value =>
	validators.reduce((error, validator) => error || validator(value), undefined);

export default validations;
