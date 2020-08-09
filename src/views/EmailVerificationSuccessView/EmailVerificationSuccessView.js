import React, { useEffect, useState } from "react";

import RegistrationSuccessPanel from "components/RegistrationSuccessPanel";
import FlexContainer from "components/_Shared/FlexContainer";

import { useHistory, useRouteMatch } from 'react-router-dom';
import {get} from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';

const EmailVerificationSuccessView = () => {
	const [message, setMessage] = useState('');
	const match = useRouteMatch();
	const history = useHistory();

	async function verifyEmail(id) {
		try {
			const res = await get({url: `/user/verify/${id}`});
			const response = await res.json();
			if (response.error) {
				setMessage(response.error)
			} else {
				setMessage(response.message)
			}
		} catch (e) {
			console.log(e)
		}

	}

	useEffect(() => {
		const timeout = setTimeout(() => history.push('/login'), 5000);
		verifyEmail(match.params.id);
		return () => clearTimeout(timeout);
		//	eslint-disable-next-line
	}, [])

	return(
		<FlexContainer justify={'flex-start'} wrap={'wrap'}>
			<RegistrationSuccessPanel message={message} />
		</FlexContainer>
	)
};

export default withRouter(EmailVerificationSuccessView);