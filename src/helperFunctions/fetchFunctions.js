export const get = ({url, auth}) => {
	return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': `Bearer ${auth}`
		}
	});
};