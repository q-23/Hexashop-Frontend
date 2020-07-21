import React, { useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";

import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import RegistrationSuccessPanel from "components/RegistrationSuccessPanel";
const RegistrationSuccessView = ({ history }) => {

	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			<RegistrationSuccessPanel/>
		</FlexContainer>
	)
};

export default withRouter(RegistrationSuccessView);