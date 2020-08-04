import Pagination from "components/Pagination";
import React from "react";
import { render } from '@testing-library/react'

describe('[PAGINATION]', () => {
	test('Should render component', () => {
		const wrapper = render(<Pagination/>)

		expect(wrapper).toMatchSnapshot();
	});
})