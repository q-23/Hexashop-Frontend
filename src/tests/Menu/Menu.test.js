import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Menu from '../../components/Menu';
import { MemoryRouter as Router } from 'react-router-dom';
import { MOCK_CATEGORIES } from "./Menu.mock.data";

describe('[MENU]', () => {
	test('Should render without failing with empty data', () => {
		const wrapper = render(
			<Router keyLength={0}>
				<Menu/>
			</Router>
		);
		expect(wrapper).toMatchSnapshot();
	})

	test('Should not render list without data given', () => {
		const wrapper = render(
			<Router keyLength={0}>
				<Menu categories={[]}/>
			</Router>
		);
		const { container } = wrapper;
		expect(wrapper).toMatchSnapshot();
		expect(container.querySelector('li')).toBeFalsy()
	});

	test('Should render lists of links', () => {
		const wrapper = render(
			<Router keyLength={0}>
				<Menu categories={MOCK_CATEGORIES}/>
			</Router>
		);
		const { getByText } = wrapper;
		MOCK_CATEGORIES.forEach(link => {
			expect(getByText(link.label)).toBeInTheDocument()
			expect(getByText(link.label)).toHaveAttribute('href', link.to)
		})
		expect(wrapper).toMatchSnapshot();
	});
})

