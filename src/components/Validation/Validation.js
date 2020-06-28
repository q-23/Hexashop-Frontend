const validations = {
	required: value => {
		if (typeof value === 'string') {
			return value.length ? undefined : true
		}
		return value ? undefined : true;
	}
};

export default validations;
