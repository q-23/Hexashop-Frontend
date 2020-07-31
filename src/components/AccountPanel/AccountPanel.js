import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import Button from "components/_Shared/Button";
import Input from "components/_Shared/Input";
import Icon from "components/_Shared/Icon";
import validations from "components/Validation";
import BasicLink from "components/_Shared/BasicLink";

import {InputWrapper} from "views/AccountView/AccountView.style";
import {AccountImage} from "components/AccountPanel/AccountPanel.style";

import ACCOUNT_IMAGE from 'assets/images/account_image.jpg';

import { Field } from 'react-final-form';
import {Spacer} from "components/AccountPanel/AccountPanel.style";
import {useStateValueAuthorization} from "contexts/authorization/authorization";
import { withRouter } from 'react-router-dom';
import authorizationActions from "contexts/authorization/actions";

const AccountPanel = ({ isViewTypeRegister, history }) => {
	const [,dispatch] = useStateValueAuthorization();

	const logout = () => {
		dispatch({ type: authorizationActions.LOGOUT });
		history.push('/')
	}


	return (
		<>
			<BoxHeaderContainer>
				<BoxName>{isViewTypeRegister ? 'Register an account' : 'Edit account'} <Icon className={'fa fa-sign-in'}/></BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'flex-start'} styles={'margin: 2em 0; position: relative'}>
				<AccountImage src={ACCOUNT_IMAGE}/>
				<FlexItem xs={12} align={'center'}>
					<InputWrapper>
					<Field
						validate={validations.required}
						name={'email'}
					>
						{({ input, meta }) => (
							<Input
								invalid={meta.error && meta.touched}
								label={'E-mail'}
								key={'email'}
								disabled={!isViewTypeRegister}
								{...input}
							/>
							)}
					</Field>
					</InputWrapper>
				</FlexItem>
				<Spacer/>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							// validate={validations.required}
							name={'password'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Password'}
									type={'password'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							// validate={validations.required}
							name={'confirm_password'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Confirm password'}
									type={'password'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<Spacer/>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							validate={validations.required}
							name={'name'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Name'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							validate={validations.required}
							name={'surname'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Surname'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
								validate={validations.required}
								name={'city'}
							>
								{({ input, meta }) => (
									<Input
										invalid={meta.error && meta.touched}
										label={'City'}
										{...input}
									/>
									)}
							</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							validate={validations.required}
							name={'street'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Street'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							validate={validations.required}
							name={'house_number'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'House number'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'}>
					<InputWrapper>
						<Field
							validate={validations.required}
							name={'postal_code'}
						>
							{({ input, meta }) => (
								<Input
									invalid={meta.error && meta.touched}
									label={'Postal code'}
									{...input}
								/>
							)}
						</Field>
					</InputWrapper>
				</FlexItem>
				<Spacer/>
				<FlexItem xs={12} align={'center'}>
					<InputWrapper>
						<Button with_gradient type={'submit'}>{isViewTypeRegister ? 'Register' : 'Save account'}</Button>
						<br/>
						{!isViewTypeRegister && <BasicLink onClick={logout}>Log out</BasicLink>}
					</InputWrapper>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default withRouter(AccountPanel);