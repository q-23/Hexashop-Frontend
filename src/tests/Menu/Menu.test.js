import React, {useContext} from 'react';

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import {RenderWithRouter, RenderWithMenuContext} from "tests/utils";
import { act } from 'react-dom/test-utils';
import compose from 'helperFunctions/compose'

import Menu from 'components/Menu';

import { MOCK_CATEGORIES, MOCK_CATEGORY_NOT_SHOW_IN_MENU } from "./Menu.mock.data";
import {MenuContext} from "contexts/menu/menu";

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

const TestComponentLinks = () => {
	const { setMenuCategories } = useContext(MenuContext);
	React.useEffect(() => setMenuCategories(MOCK_CATEGORIES) ,[])
	return (
		<div>
			<Menu/>
		</div>
	)
}

describe('[MENU]', () => {
	test('Should render without failing with empty data', async () => {
		let wrapper;
		await act(async () => {
			 wrapper = render(compose(
				 RenderWithRouter(),
				 RenderWithMenuContext
			 )(<Menu />)
			);
			expect(wrapper).toMatchSnapshot();
		})
	})

	test('Should not render list without data given', async () => {
		let wrapper;
		await act(async () => {
			wrapper = render(compose(
				RenderWithRouter(),
				RenderWithMenuContext
			)(<Menu categories={[]}/>))
		})
		const { container } = wrapper;
		expect(wrapper).toMatchSnapshot();
		expect(container.querySelector('li')).toBeFalsy()
	});

	test('Should render lists of links', () => {
		const wrapper = render(compose(
			RenderWithRouter(),
			RenderWithMenuContext
		)(<TestComponentLinks/>));
		const { getByText } = wrapper;

		MOCK_CATEGORIES.forEach(link => {
			console.log(link.category_name)
			expect(getByText(link.category_name)).toBeInTheDocument()
			expect(getByText(link.category_name)).toHaveAttribute('href', link.category_path)
		})
		expect(wrapper).toMatchSnapshot();
	});

	test('Should add underline to active links', () => {
		const wrapper = render(compose(
			RenderWithRouter('/cat1'),
			RenderWithMenuContext
		)(<TestComponentLinks/>, MOCK_CATEGORIES[0].category_path));
		const { getByText } = wrapper;
		expect(getByText(/First category/)).toHaveStyle(`text-decoration: underline;`)
	});

	test('Should not render links with falsy showInMenu key', () => {
		const wrapper = render(compose(
			RenderWithRouter(),
			RenderWithMenuContext
		)(<Menu categories={MOCK_CATEGORY_NOT_SHOW_IN_MENU}/>, MOCK_CATEGORY_NOT_SHOW_IN_MENU[0].category_path));
		const { container } = wrapper;
		expect(container.querySelector('li')).toBeFalsy();
	});

	test('Should close the menu when clicking on blurred area', () => {
		const wrapper = render(compose(
			RenderWithRouter(),
			RenderWithMenuContext
		)(<TestComponent categories={MOCK_CATEGORIES}/>, MOCK_CATEGORIES[0].category_path));
		const { container, getByText } = wrapper;
		const blurredOverlay = container.querySelector('div[class]')
		expect(getByText(/true/)).toBeInTheDocument();
		expect(blurredOverlay).toHaveStyle(`transform: translate3d(0vw,0,0);`);
		fireEvent.click(blurredOverlay);
		expect(getByText(/false/)).toBeInTheDocument();
	});

})

