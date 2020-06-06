import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from "../../components/Navbar/Navbar";
import { renderWithRouter } from "../utils";
import {MenuContext} from "../../contexts/reducers/menu";

const TestComponent = () => {
	const { menuOpen } = useContext(MenuContext);

	return (
		<div>
			<Navbar/>
			TEKST
			{ menuOpen.toString() }
		</div>
	)
}

describe('[NAVBAR]', () => {
	test('Should render component', () => {
		const wrapper = render(
			renderWithRouter(<Navbar/>)
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Should open the menu after clicking proper button', () => {
		const wrapper = render(
			renderWithRouter(<TestComponent/>)
		);
		fireEvent.click(wrapper.container.querySelector('.fa-bars'))
		expect(wrapper.getByText(/true/)).toBeInTheDocument();
	});

	test('Should close the menu after clicking button two times', () => {
		const wrapper = render(
			renderWithRouter(<TestComponent/>)
		);
		fireEvent.click(wrapper.container.querySelector('.fa-bars'))
		expect(wrapper.getByText(/true/)).toBeInTheDocument();
		fireEvent.click(wrapper.container.querySelector('.fa-times'))
		expect(wrapper.getByText(/false/)).toBeInTheDocument();
	});
});

