import React, {useContext} from 'react';

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import {renderWithRouter} from "tests/utils";

import Menu from 'components/Menu';

import { MOCK_CATEGORIES, MOCK_CATEGORY_NOT_SHOW_IN_MENU } from "./Menu.mock.data";
import {MenuContext} from "contexts/reducers/menu";

const TestComponent = ({categories}) => {
	const { menuOpen, setMenuOpen } = useContext(MenuContext);
	React.useEffect(() => setMenuOpen(true) ,[])
	return (
		<div>
			<Menu categories={categories}/>
			{ menuOpen.toString() }
		</div>
	)
}

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
			console.log(link.category_name)
			expect(getByText(link.category_name)).toBeInTheDocument()
			expect(getByText(link.category_name)).toHaveAttribute('href', '/category' + link.category_path)
		})
		expect(wrapper).toMatchSnapshot();
	});

	test('Should add underline to active links', () => {
		const wrapper = render(renderWithRouter(<Menu categories={MOCK_CATEGORIES}/>, MOCK_CATEGORIES[0].category_path));
		const { getByText } = wrapper;
		expect(getByText(/First category/)).toHaveStyle(`text-decoration: underline;`)
	});

	test('Should not render links with falsy showInMenu key', () => {
		const wrapper = render(renderWithRouter(<Menu categories={MOCK_CATEGORY_NOT_SHOW_IN_MENU}/>, MOCK_CATEGORY_NOT_SHOW_IN_MENU[0].category_path));
		const { container } = wrapper;
		expect(container.querySelector('li')).toBeFalsy();
	});

	test('Should close the menu when clicking on blurred area', () => {
		const wrapper = render(renderWithRouter(<TestComponent categories={MOCK_CATEGORIES}/>, MOCK_CATEGORIES[0].category_path));
		const { container, getByText } = wrapper;
		const blurredOverlay = container.querySelector('div[class]')
		expect(getByText(/true/)).toBeInTheDocument();
		expect(blurredOverlay).toHaveStyle(`transform: translate3d(0vw,0,0);`);
		fireEvent.click(blurredOverlay);
		expect(getByText(/false/)).toBeInTheDocument();
	});

})

