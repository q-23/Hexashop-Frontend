import React, { useEffect, useState } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FormFullWidth from "components/_Shared/Form";
import AccountPanel from "components/AccountPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { get, patch, post } from "helperFunctions/fetchFunctions";
import { useHistory, withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { diff } from 'deep-object-diff';
import { toast } from "react-toastify";

import validations from "components/Validation";
import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";

const AccountView = ({ match }) => {
	const [accountData, setAccountData] = useState({});
	const [auth] = useStateValueAuthorization();
	const history = useHistory();

	const isViewTypeRegister = match.path === '/register';

	async function fetchAccountData() {
		try {
			const response = await get({url: '/user/me', auth: auth.token});
			const responseJSON = await response.json()
			setAccountData(responseJSON)
		} catch (e) {
			console.log(e)
		}
	};

	async function editAccountData(accData) {
		try {
			const changedFields = diff(accountData, accData);
			delete changedFields.email;
			if(accData.confirm_password) {
				delete changedFields.confirm_password;
			}

			const res = await patch({url: '/user', auth: auth.token, body: JSON.stringify(changedFields)});
			const resJSON = await res.json();
			if(res.status === 200) {
				return toast.success(resJSON.message, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			if(res.status - 400 < 100) {
				return toast.error('Something went wrong...', {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			fetchAccountData()
		} catch (e) {
			console.log(e);
		}
	}

	async function registerAccount(accData) {
		try {
			const res = await post({url: '/user/new', auth, body: JSON.stringify(accData)});
			const result = await res.json();

			if(res.status === 400) {
				return toast.error(result.error.replace('Error: ', ''), {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			if(res.status === 201) {
				history.push('/login');
				return toast.success(result.message, {
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
			console.log(e);
		}
	}

	useEffect(() => {
		if(!isViewTypeRegister){
			fetchAccountData()
		}
		//	eslint-disable-next-line
	}, []);

	useEffect(() => {
		if(!isViewTypeRegister && !auth.token) {
			history.push('/login')
		}
	//	eslint-disable-next-line
	}, [])

	return(
		<Form
			onSubmit={accData => {
				if(isViewTypeRegister) {
					registerAccount(accData)
				} else {
					editAccountData(accData)
				}
			}}
			validate={values => {
				const errors = {};
				if (values.password && values.confirm_password) {
					const passwordErrors = validations.passwordsMustMatch(
						values.password,
						values.confirm_password
					);
					if (passwordErrors) {
						errors.confirm_password = passwordErrors;
						errors.password = passwordErrors;
					}
				}
				return errors;
			}}
			initialValues={accountData}
			render={({ handleSubmit }) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<AccountPanel isViewTypeRegister={isViewTypeRegister}/>
						<BoxHeaderContainer variant_down/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(AccountView);