import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithWidth from "components/_HOC/WithWidth";

const RenderWidth = ({ width}) => {
	return( <p>{width}</p> )
};

const WidthWithHOC = WithWidth(RenderWidth);

describe('[WITH WIDTH]', () => {
	test('Should provide screen width info', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.getByText(/md/)).toBeInTheDocument();
	});

	test('Should provide screen width info - xs', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 500
		fireEvent(window, new Event('resize'))
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.getByText(/xs/)).toBeInTheDocument();
	});

	test('Should provide screen width info - sm', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 650
		fireEvent(window, new Event('resize'))
		expect(wrapper.getByText(/sm/)).toBeInTheDocument();
	});

	test('Should provide screen width info - md', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 800
		fireEvent(window, new Event('resize'))
		expect(wrapper.getByText(/md/)).toBeInTheDocument();
	});

	test('Should provide screen width info - lg', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 1100
		fireEvent(window, new Event('resize'))
		expect(wrapper.getByText(/lg/)).toBeInTheDocument();
	});

	test('Should provide screen width info - xl', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 1366
		fireEvent(window, new Event('resize'))
		expect(wrapper.getByText(/xl/)).toBeInTheDocument();
	});

	test('Should handle multiple resizes', () => {
		const wrapper = render(
			<WidthWithHOC/>
		);
		window.innerWidth = 2048
		fireEvent(window, new Event('resize'))
		window.innerWidth = 500
		fireEvent(window, new Event('resize'))
		window.innerWidth = 768
		fireEvent(window, new Event('resize'))
		window.innerWidth = 1366
		fireEvent(window, new Event('resize'))
		expect(wrapper.getByText(/xl/)).toBeInTheDocument();
	});
})

