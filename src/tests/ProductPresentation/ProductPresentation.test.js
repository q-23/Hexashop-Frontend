import React from 'react';

import ProductPresentation from 'components/ProductPresentation';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { RenderWithRouter, RenderWithForm } from "tests/utils";
import compose from "helperFunctions/compose";
import { MOCK_PRODUCT } from "./ProductPresentation.mock.data";

describe('[PRODUCT PRESENTATION]', () => {
	test('Should render product name and price', () => {
		const wrapper = render(
			compose(
				RenderWithForm(),
				RenderWithRouter()
			)(<ProductPresentation product={MOCK_PRODUCT}/>)
		);
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.getByText(/23.23/)).toBeInTheDocument();
	});
})

