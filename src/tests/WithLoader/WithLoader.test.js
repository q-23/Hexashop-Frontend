import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithLoader from "components/_HOC/WithLoader";

const TestComponent = () => {
	return( <p>Test</p> )
};

const RenderWithLoader = WithLoader(TestComponent);

describe('[WITH LOADER]', () => {
	test('Should render wrapped component when isLoading is false', () => {
		const wrapper = render(
			<RenderWithLoader isLoading={false}/>
		);
		expect(wrapper.getByText(/Test/)).toBeInTheDocument();
	});

	test('Should render loader component when isLoading is true', () => {
		const wrapper = render(
			<RenderWithLoader isLoading={true}/>
		);
		expect(wrapper.container.querySelector('p')).not.toBeInTheDocument();
	});
})

