import Pagination from "components/Pagination";
import React from "react";
import { render } from '@testing-library/react'
import { RenderWithPagination } from "tests/utils";

describe('[PAGINATION]', () => {
	test('Should render one page button when given only one page', async () => {
		const wrapper = render(RenderWithPagination(<Pagination/>))

		expect(wrapper).toMatchSnapshot();
	});
})