import Pagination from "components/Pagination";
import React from "react";

describe('[PAGINATION]', () => {
	test('Should render one page button when given only one page', async () => {
		const wrapper = render(<Pagination/>)

		expect(wrapper).toMatchSnapshot();
	});
})