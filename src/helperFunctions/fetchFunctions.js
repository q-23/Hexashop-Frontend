export const get = ({url, auth}) => {
	return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': `Bearer ${auth}`
		}
	});
};

export const post = ({url, auth, body}) => {
	return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': `Bearer ${auth}`
		},
		method: 'POST',
		body
	});
};

export const patch = ({url, auth, body}) => {
	return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': `Bearer ${auth}`
		},
		method: 'PATCH',
		body
	});
};