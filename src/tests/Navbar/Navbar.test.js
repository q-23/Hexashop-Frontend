import React, { useContext } from 'react';

import { render, fireEvent } from '@testing-library/react'
import {MenuContext} from "contexts/menu/menu";
import '@testing-library/jest-dom/extend-expect'
import { RenderWithRouter, RenderWithMenuContext } from "tests/utils";
import compose from 'helperFunctions/compose'

import Navbar from "components/Navbar/Navbar";

const TestComponent = () => {
	const { menuOpen } = useContext(MenuContext);

	return (
		<div>
			<Navbar/>
			{ menuOpen.toString() }
		</div>
	)
}

describe('[NAVBAR]', () => {
	test('Should render component', () => {
		const wrapper = render(
			compose(RenderWithRouter(), RenderWithMenuContext)(<Navbar/>)
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should open the menu after clicking proper button', () => {
		const wrapper = render(
			compose(RenderWithRouter(), RenderWithMenuContext)(<TestComponent/>)
		);
		fireEvent.click(wrapper.container.querySelector('.fa-bars'))
		expect(wrapper.getByText(/true/)).toBeInTheDocument();
	});

	test('Should close the menu after clicking button two times', () => {
		const wrapper = render(
			compose(RenderWithRouter(), RenderWithMenuContext)(<TestComponent/>)
		);
		fireEvent.click(wrapper.container.querySelector('.fa-bars'))
		expect(wrapper.getByText(/true/)).toBeInTheDocument();
		fireEvent.click(wrapper.container.querySelector('.fa-times'))
		expect(wrapper.getByText(/false/)).toBeInTheDocument();
	});
});

