import React, { useEffect } from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import PasswordResetPanel from "components/PasswordResetPanel";
import FlexContainer from "components/_Shared/FlexContainer";
import FormFullWidth from "components/_Shared/Form";

import { get } from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { toast } from "react-toastify";

const PasswordResetView = ({ history, match }) => {
	const { token } = match.params;
	let timeout;

	async function logIn(data) {
		try {
			const res = await get({ url: `/user/reset_password?email=${data.email}` });
			const result = await res.json();

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
				timeout = setTimeout(() => {
					history.push('/login')
				}, 5000)
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

	useEffect(()=> {
		return () => clearTimeout(timeout)
	//	eslint-disable-next-line
	}, [])

	return(
		<Form
			onSubmit={logIn}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<PasswordResetPanel/>
						<BoxHeaderContainer variant_down no_margin_top/>
					</FlexContainer>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(PasswordResetView);