import React from "react";

import {MemoryRouter as Router} from "react-router-dom";
import StateProviderMenu from "contexts/menu/menu";
import { Form } from "react-final-form";
import {FormFullWidth} from "components/_Shared/Form";
import { StateProviderPagination } from "contexts/pagination/pagination";
import { StateProviderAuthorization } from "contexts/authorization/authorization";
import { StateProviderShopcart } from "contexts/shopcart/shopcart";

export const RenderWithRouter = (route = '/') => (component) => (
	<Router keyLength={0} initialEntries={[route]}>
		{component}
	</Router>);

export const RenderWithMenuContext = component => <StateProviderMenu>{component}</StateProviderMenu>

export const RenderWithShopcartContext = component => <StateProviderShopcart>{component}</StateProviderShopcart>

export const RenderWithAuthorizationContext = component => <StateProviderAuthorization>{component}</StateProviderAuthorization>

export const RenderWithPagination = component => <StateProviderPagination>{component}</StateProviderPagination>

export const RenderWithForm = (callback = () => {}, values = {}) => (component) => {
	return (
		<Form
			onSubmit={callback}
			initialValues={values}
			render={({ handleSubmit }) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					{component}
				</FormFullWidth>
			)}
		/>
	)
}