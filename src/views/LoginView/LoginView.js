import React, { useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import LoginPanel from "components/LoginPanel";
import authorizationActions from "contexts/authorization/actions";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { FormFullWidth } from "components/_Shared/Form";
import { post } from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import {toast} from "react-toastify";

const LoginView = ({ history }) => {
	const [auth, dispatch] = useStateValueAuthorization();

	async function logIn(data) {
		try {
			const res = await post({ url: '/user/login',body: JSON.stringify(data)});
			const result = await res.json();
			const { token } = result;
			dispatch({ type: authorizationActions.LOGIN, payload: token });
			if(res.status === 200) {
				toast.success(result.message, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			if(res.status === 400) {
				toast.error(result.error.replace('Error: ', ''), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		console.log(auth)
		if (auth && auth.length) {
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