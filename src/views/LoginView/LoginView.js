import React, { useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FormFullWidth from "components/_Shared/Form";
import LoginPanel from "components/LoginPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import authorizationActions from "contexts/authorization/actions";
import { post } from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { toast } from "react-toastify";
import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";

const LoginView = ({ history }) => {
	const [auth, dispatch] = useStateValueAuthorization();

	async function logIn(data) {
		try {
			const res = await post({ url: '/user/login',body: JSON.stringify(data)});
			const result = await res.json();
			const { token, isAdmin } = result;

			dispatch({ type: authorizationActions.LOGIN, payload: { token, isAdmin } });

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
		if (auth && auth.token && auth.token.length) {
			history.push('/')
		}
		//	eslint-disable-next-line
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
						<BoxHeaderContainer variant_down no_margin_top/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(LoginView);