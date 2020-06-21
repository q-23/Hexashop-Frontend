import React from 'react';

import ProductPresentation from 'components/ProductPresentation';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { RenderWithRouter } from "tests/utils";
import compose from "helperFunctions/compose";
import { MOCK_PRODUCT } from "./ProductPresentation.mock.data";
import {FormFullWidth} from "components/_Shared/Form";
import {Form} from "react-final-form";

describe('[PRODUCT PRESENTATION]', () => {
	test('Should render product name and price', () => {
		const wrapper = render(
			compose(
				RenderWithRouter()
			)(
				<Form
					onSubmit={() => {}}
					initialValues={{quantity: 1}}
					render={({ handleSubmit, values, form }) => (
						<FormFullWidth
							onSubmit={handleSubmit}
						>
							<ProductPresentation product={MOCK_PRODUCT} values={values} form={form}/>
						</FormFullWidth>
					)}
				/>
				)
		);
		expect(wrapper.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
		expect(wrapper.getByText(/23.23/)).toBeInTheDocument();
		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '1')
	});

	test('Should increase product quantity', () => {
		const wrapper = render(
			compose(
				RenderWithRouter()
			)(
				<Form
					onSubmit={() => {}}
					initialValues={{quantity: 1}}
					render={({ handleSubmit, values, form }) => (
						<FormFullWidth
							onSubmit={handleSubmit}
						>
							<ProductPresentation product={MOCK_PRODUCT} values={values} form={form}/>
						</FormFullWidth>
					)}
				/>
			)
		);
		const button = wrapper.container.querySelector('.fa-plus')

		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '1')
		expect(button).toBeInTheDocument();
		fireEvent.click(button)
		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '2')
		fireEvent.click(button)
		fireEvent.click(button)
		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '4')
	});

	test('Should decrease product quantity', () => {
		const wrapper = render(
			compose(
				RenderWithRouter()
			)(
				<Form
					onSubmit={() => {}}
					initialValues={{quantity: 1}}
					render={({ handleSubmit, values, form }) => (
						<FormFullWidth
							onSubmit={handleSubmit}
						>
							<ProductPresentation product={MOCK_PRODUCT} values={values} form={form}/>
						</FormFullWidth>
					)}
				/>
			)
		);
		const button = wrapper.container.querySelector('.fa-plus')
		const buttonMinus = wrapper.container.querySelector('.fa-minus')

		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '1')
		expect(button).toBeInTheDocument();
		expect(buttonMinus).toBeInTheDocument();
		fireEvent.click(button)
		fireEvent.click(button)
		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '3')
		fireEvent.click(buttonMinus)
		fireEvent.click(buttonMinus)
		fireEvent.click(buttonMinus)
		fireEvent.click(buttonMinus)
		fireEvent.click(buttonMinus)
		expect(wrapper.container.querySelector('input')).toHaveAttribute('value', '1')
	});
})

