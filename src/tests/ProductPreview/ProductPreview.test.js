import React from 'react';

import ProductPreview from 'components/ProductPreview';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { RenderWithRouter } from "tests/utils";
import { act } from 'react-dom/test-utils';

import { MOCK_PRODUCT } from "./ProductPreview.mock.data";

describe('[PRODUCT PREVIEW]', () => {
	test('Should render component', async () => {
		let wrapper;

		await act(async () => {
			wrapper = render(
				RenderWithRouter()(<ProductPreview/>)
			);
		})

		expect(wrapper).toMatchSnapshot();
	});

	test('Should render product name and price', async () => {
		let wrapper;

		await act(async () => {
			wrapper = render(
				RenderWithRouter()(<ProductPreview  product={MOCK_PRODUCT}/>)
			);
		})
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.getByText(/23.23/)).toBeInTheDocument();
	});

	test('Should render image',async () => {
		let wrapper;
		await act(async () => {
			wrapper = render(
				RenderWithRouter()(<ProductPreview  product={MOCK_PRODUCT}/>)
			);
		})
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.container.querySelector('img')).toHaveAttribute('src', MOCK_PRODUCT.image_thumbnail.link)
	});

	test('Should provide valid link to button', async () => {
		let wrapper;

		await act(async () => {
			wrapper = render(
				RenderWithRouter()(<ProductPreview  product={MOCK_PRODUCT}/>)
			);
		})

		expect(wrapper.getByText(/Add to cart/)).toBeInTheDocument();
		const link = wrapper.container.querySelector(`[href="/product/${MOCK_PRODUCT._id}"]`);
		expect(link).toBeInTheDocument()
	});
})

