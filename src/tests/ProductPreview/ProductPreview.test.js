import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductPreview from '../../components/ProductPreview';
import { MOCK_PRODUCT } from "./ProductPreview.mock.data";

describe('[PRODUCT PREVIEW]', () => {
	test('Should render component', () => {
		const wrapper = render(
				<ProductPreview/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render product name and price', () => {
		const wrapper = render(
			<ProductPreview product={MOCK_PRODUCT}/>
		);
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.getByText(MOCK_PRODUCT.price.toString())).toBeInTheDocument();
	});

	test('Should render image', () => {
		const wrapper = render(
			<ProductPreview product={MOCK_PRODUCT}/>
		);
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.container.querySelector('img')).toHaveAttribute('src', MOCK_PRODUCT.image_thumbnail)
	});
})

