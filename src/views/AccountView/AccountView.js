import React, { useEffect, useState } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import AccountPanel from "components/AccountPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { get, patch, post } from "helperFunctions/fetchFunctions";
import { diff } from 'deep-object-diff';
const AccountView = ({ match }) => {
	const [accountData, setAccountData] = useState({});
	const [auth] = useStateValueAuthorization();

	const isViewTypeRegister = match.path === '/register';

	async function fetchAccountData() {
		try {
			const response = await get({url: '/user/me', auth});
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

			await patch({url: '/user', auth, body: JSON.stringify(changedFields)});
			fetchAccountData()
		} catch (e) {
			console.log(e);
		}
	}

	async function registerAccount(accData) {
		try {
			const acc = await post({url: '/user/new', auth, body: JSON.stringify(accData)});
			console.log(acc)
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
					registerAccount(accData)
				}
				editAccountData(accData)
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