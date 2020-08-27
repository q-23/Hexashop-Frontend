import React, { useEffect, useState } from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import PasswordResetPanel from "components/PasswordResetPanel";
import FlexContainer from "components/_Shared/FlexContainer";
import FormFullWidth from "components/_Shared/Form";
import Loader from "components/Loader/Loader";

import {patch, get} from "helperFunctions/fetchFunctions";
import { withRouter } from 'react-router-dom';
import { Form } from 'react-final-form';
import { toast } from "react-toastify";
import {PasswordResetImage} from "components/PasswordResetPanel/PasswordResetPanel.style";
import img from "assets/forgot_password.png";

const PasswordResetView = ({ history, match }) => {
	const [isLoading, setIsLoading] = useState(false);
	const { token } = match.params;
	let timeout;

	async function requestPasswordResetLink(data) {
		setIsLoading(true)
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
			setIsLoading(false)
		} catch (e) {
			console.log(e)
			setIsLoading(false)
		}
	}

	async function setNewPassword({ password }) {
		setIsLoading(true)
		try {
			const res = await patch({ url: `/user/reset_password`, auth: token, body: JSON.stringify({ password }) });
			const result = await res.json();

			if(res.status === 200) {
				toast.success(result.message, {
					position: "bottom-right",
					hideProgressBar: false,
					progress: undefined,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					autoClose: 5000,
				});
				timeout = setTimeout(() => {
					history.push('/login')
				}, 5000)
			}
			if(res.status === 400) {
				toast.error(result.error.replace('Error: ', ''), {
					position: "bottom-right",
					hideProgressBar: false,
					progress: undefined,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					autoClose: 5000,
				});
			}
			setIsLoading(false)
		} catch (e) {
			console.log(e)
			setIsLoading(false)
		}
	}

	useEffect(()=> {
		return () => clearTimeout(timeout)
	//	eslint-disable-next-line
	}, [])

	return(
		<Form
			onSubmit={token ? setNewPassword : requestPasswordResetLink}
			render={({ handleSubmit}) => (
				<FormFullWidth
					onSubmit={handleSubmit}
				>
					<FlexContainer justify={'flex-start'} wrap={'wrap'}>
						<PasswordResetImage src={img}/>
						<PasswordResetPanel isSettingNewPassword={!!token}/>
						<BoxHeaderContainer variant_down no_margin_top/>
					</FlexContainer>
					<Loader isLoading={isLoading}/>
				</FormFullWidth>
			)}
		/>
	)
};

export default withRouter(PasswordResetView);