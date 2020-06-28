import React from 'react';

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { RenderWithRouter } from "tests/utils";
import Header from 'components/Header';

describe('[HEADER]', () => {
	test('Should render component', () => {
		const wrapper = render(
			RenderWithRouter()(<Header/>)
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should render image within', () => {
		const wrapper = render(
			RenderWithRouter()(<Header/>)
		);
		expect(wrapper.container.querySelector('img')).toHaveAttribute('src', 'logo.png')
	});
})

