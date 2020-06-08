import React from 'react';

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import FlexItem from "components/_Shared/FlexItem";

describe('[FLEX ITEM]', () => {
	test('Should render component', () => {
		const wrapper = render(
				<FlexItem/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render proper width - xs', () => {
		const wrapper = render(
			<FlexItem xs={6}/>
		);
		window.innerWidth = 500
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="xs"]')).toHaveStyle('max-width: 50%')
	});

	test('Should render proper width - sm', () => {
		const wrapper = render(
			<FlexItem xs={6} sm={7}/>
		);
		window.innerWidth = 650
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="sm"]')).toHaveStyle(`max-width: ${(7 * 100) / 12}%`)
	});

	test('Should render proper width - md', () => {
		const wrapper = render(
			<FlexItem xs={6} sm={7} md={3}/>
		);
		window.innerWidth = 780
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="md"]')).toHaveStyle(`max-width: ${(3 * 100) / 12}%`)
	});

	test('Should render proper width - lg', () => {
		const wrapper = render(
			<FlexItem xs={6} sm={7} md={3} lg={8}/>
		);
		window.innerWidth = 1100
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="lg"]')).toHaveStyle(`max-width: ${(8 * 100) / 12}%`)
	});

	test('Should render proper width - xl', () => {
		const wrapper = render(
			<FlexItem xs={6} sm={7} md={3} lg={8} xl={2}/>
		);
		window.innerWidth = 1600
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="xl"]')).toHaveStyle(`max-width: ${(2 * 100) / 12}%`)
	});

	test('Should render the closest provided breakpoint width when no width for current one is specified', () => {
		const wrapper = render(
			<FlexItem md={3} lg={8} xl={2}/>
		);
		window.innerWidth = 300
		fireEvent(window, new Event('resize'))

		expect(wrapper.container.querySelector('div[width="xs"]')).toHaveStyle(`max-width: ${(3 * 100) / 12}%`)
	});
})

