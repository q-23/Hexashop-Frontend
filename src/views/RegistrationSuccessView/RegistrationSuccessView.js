import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";

import { withRouter } from 'react-router-dom';
import RegistrationSuccessPanel from "components/RegistrationSuccessPanel";
const RegistrationSuccessView = ({ history }) => {

	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			<RegistrationSuccessPanel/>
		</FlexContainer>
	)
};

export default withRouter(RegistrationSuccessView);