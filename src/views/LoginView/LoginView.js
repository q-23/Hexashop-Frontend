import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import LoginPanel from "components/LoginPanel";

import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { FormFullWidth } from "components/_Shared/Form";
import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { get } from "helperFunctions/fetchFunctions";


const LoginView = () => {
	const [auth, dispatch] = useStateValueAuthorization();

	async function logIn(data) {
		try {
			const res = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(data)
			});
			console.log(res)
			const result = await res.json();
			const { token } = result;
			dispatch({ type: 'login', payload: { token } });
		} catch (e) {
		}
	}

	async function getData() {
		try {
			const res =  await get({url: '/user/me', auth})
			const reee = await res.json()
			console.log(reee)
		} catch (e) {
		}
	}

	return(
		<Form
			onSubmit={logIn}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					{console.log(getData())}
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<LoginPanel/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(LoginView);