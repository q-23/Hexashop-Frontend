import {MemoryRouter as Router} from "react-router-dom";
import StateProviderMenu from "contexts/reducers/menu";
import React from "react";

export const renderWithRouter = (component, route = '/') => (
	<Router keyLength={0} initialEntries={[route]}>
		<StateProviderMenu>
			{component}
		</StateProviderMenu>
	</Router>);