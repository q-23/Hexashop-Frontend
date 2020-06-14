import React from "react";

import {MemoryRouter as Router} from "react-router-dom";
import StateProviderMenu from "contexts/reducers/menu";
import { Form } from "react-final-form";
import {FormFullWidth} from "components/_Shared/Form";

export const RenderWithRouter = (route = '/') => (component) => (
	<Router keyLength={0} initialEntries={[route]}>
		{component}
	</Router>);

export const RenderWithMenuContext = component => <StateProviderMenu>{component}</StateProviderMenu>

export const RenderWithForm = (callback = () => {}) => (component) => {
	return (
		<Form
			onSubmit={callback}
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