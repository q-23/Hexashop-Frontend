import React, { useContext } from 'react';

import { render, fireEvent } from '@testing-library/react'
import { PaginationContext } from "contexts/pagination/pagination";
import { useStateValuePagination } from "contexts/pagination/pagination";
import '@testing-library/jest-dom/extend-expect'

import Pagination from "components/Pagination";
import { RenderWithPagination } from "tests/utils";

const TestComponent = () => {
	const [{skip, limit, numberOfPages, currentPage}] = useContext(PaginationContext);

	return (
		<div>
			<Pagination/>
		</div>
	)
}

describe('[PAGINATION CONTEXT]', () => {
	test('Should render component', () => {
		const wrapper = render(
			compose(RenderWithPagination)(<Navbar/>)
		);
		expect(wrapper).toMatchSnapshot();
	});
});

