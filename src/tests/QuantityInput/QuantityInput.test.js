import React from 'react';

import QuantityInput from 'components/QuantityInput';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { RenderWithForm } from "tests/utils";

describe('[QUANTITY INPUT]', () => {
	test('Should render product name and price', () => {
		const wrapper = render(
			RenderWithForm()(<QuantityInput />)
		);
		const input = wrapper.container.querySelector('input');
		console.log(input.value)
	});
})

