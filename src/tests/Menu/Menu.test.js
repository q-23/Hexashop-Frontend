import React from 'react';

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import {renderWithRouter} from "../utils";

import Menu from '../../components/Menu';

import { MOCK_CATEGORIES } from "./Menu.mock.data";

describe('[MENU]', () => {
	test('Should render without failing with empty data', () => {
		const wrapper = render(
			renderWithRouter(<Menu />)
		);
		expect(wrapper).toMatchSnapshot();
	})

	test('Should not render list without data given', () => {
		const wrapper = render(renderWithRouter(<Menu categories={[]}/>));
		const { container } = wrapper;
		expect(wrapper).toMatchSnapshot();
		expect(container.querySelector('li')).toBeFalsy()
	});

	test('Should render lists of links', () => {
		const wrapper = render(renderWithRouter(<Menu categories={MOCK_CATEGORIES}/>));
		const { getByText } = wrapper;
		MOCK_CATEGORIES.forEach(link => {
			expect(getByText(link.label)).toBeInTheDocument()
			expect(getByText(link.label)).toHaveAttribute('href', link.to)
		})
		expect(wrapper).toMatchSnapshot();
	});

	test('Should add underline to active links', () => {
		const wrapper = render(renderWithRouter(<Menu categories={MOCK_CATEGORIES}/>, '/shoes'));
		const { getByText } = wrapper;
		expect(getByText('Shoes')).toHaveStyle(`text-decoration: underline;`)
	});

})

