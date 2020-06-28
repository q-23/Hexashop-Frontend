import React, { useEffect, useState } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import AccountPanel from "components/AccountPanel";

import { useStateValueAuthorization } from 'contexts/authorization/authorization'
import { FormFullWidth } from "components/_Shared/Form";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { get, patch } from "helperFunctions/fetchFunctions";
import { diff } from 'deep-object-diff';
const AccountView = () => {
	const [accountData, setAccountData] = useState({});
	const [auth] = useStateValueAuthorization();

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

			const response = await patch({url: '/user', auth, body: JSON.stringify(changedFields)});
			const responseJSON = await response.json();
			console.log(responseJSON, response)
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchAccountData()
	}, []);

	return(
		<Form
			onSubmit={editAccountData}
			initialValues={accountData}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<AccountPanel/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(AccountView);