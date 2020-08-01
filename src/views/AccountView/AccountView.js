import React, { useEffect, useState } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import AccountPanel from "components/AccountPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { FormFullWidth } from "components/_Shared/Form";
import { useHistory, withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { get, patch, post } from "helperFunctions/fetchFunctions";
import { diff } from 'deep-object-diff';
import { toast } from "react-toastify";

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

			const res = await patch({url: '/user', auth, body: JSON.stringify(changedFields)});
			const resJSON = await res.json();
			console.log(resJSON)
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
	}, []);

	return(
		<Form
			onSubmit={accData => {
				if(isViewTypeRegister) {
					console.log('register')
					registerAccount(accData)
				} else {
					editAccountData(accData)
				}
			}}
			initialValues={accountData}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<AccountPanel isViewTypeRegister={isViewTypeRegister}/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(AccountView);