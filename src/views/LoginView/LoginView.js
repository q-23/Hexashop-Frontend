import React, { useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import LoginPanel from "components/LoginPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { FormFullWidth } from "components/_Shared/Form";
import { post } from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';

const LoginView = ({ history }) => {
	const [auth, dispatch] = useStateValueAuthorization();

	async function logIn(data) {
		try {
			const res = await post({ url: '/user/login',body: JSON.stringify(data)});
			const result = await res.json();
			const { token } = result;
			dispatch({ type: 'login', payload: { token } });
		} catch (e) {
		}
	}

	useEffect(() => {
		console.log(auth)
		if (auth.length) {
			history.push('/')
		}
	}, [auth])

	return(
		<Form
			onSubmit={logIn}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<LoginPanel/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(LoginView);