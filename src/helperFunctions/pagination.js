const setPagesCount = ({ count, limit = 12 }) => Math.ceil(count/limit);

const setPage = ({ pagination, setPagination }) => page => setPagination({ ...pagination, currentPage: page })

export {
	setPagesCount,
	setPage
};