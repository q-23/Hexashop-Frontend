import React, { useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";

import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import RegistrationSuccessPanel from "components/RegistrationSuccessPanel";
import {get} from "helperFunctions/fetchFunctions";

const EmailVerificationSuccessView = ({ match }) => {
	async function verifyEmail(id) {
		try {
			const response = await get({url: `/user/verify/${id}`});
			const res = await response.json();
			console.log(res)
		} catch (e) {
			console.log(e)
		}

	}

	useEffect(() => {
		verifyEmail(match.params.id)
	}, [])

	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			<RegistrationSuccessPanel/>
		</FlexContainer>
	)
};

export default withRouter(EmailVerificationSuccessView);