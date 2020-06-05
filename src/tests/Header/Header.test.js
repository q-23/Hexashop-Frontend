import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../components/Header';

describe('[HEADER]', () => {
	test('Should render component', () => {
		const wrapper = render(
				<Header/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render image within', () => {
		const wrapper = render(
			<Header/>
		);
		expect(wrapper.container.querySelector('img')).toHaveAttribute('src', 'logo.png')
	});
})

