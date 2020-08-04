import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loader from "components/Loader/Loader";


describe('[LOADER]', () => {
	test('Should render component', () => {
		const wrapper = render(
			<Loader />
		);
		expect(wrapper).toMatchSnapshot();
	});

})

