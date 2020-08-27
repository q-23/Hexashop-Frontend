import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import WithWidth from "components/_HOC/WithWidth";
import BoxName from "components/_Shared/BoxName";
import validations from "components/Validation";
import Button from "components/_Shared/Button";
import Input from "components/_Shared/Input";

import { Field } from 'react-final-form';

import { InputWrapper } from "components/AccountPanel/AccountPanel.style";
import { composeValidators } from "components/Validation/Validation";

const PasswordResetPanel = ({ isSettingNewPassword, width }) => {

	return (
		<>
			<BoxHeaderContainer>
				<BoxName>Reset your password</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'center'} styles={`margin: ${width === 'md' ? '13em 0 10em 0' : (width === 'sm' || width === 'xs')? '15em 0 10em 0' : '10em 0'}; position: relative;`}>
				<FlexItem xs={12} md={8} lg={6} xl={4} align={'center'} styles={'z-index: 2;'}>
					{!isSettingNewPassword ?
						<Field
						validate={validations.required}
						name={'email'}
						>
						{({input, meta}) => (
							<Input
								invalid={meta.error && meta.touched}
								label={'E-mail'}
								key={'email'}
								{...input}
							/>
						)}
					</Field> : (
						<>
							<InputWrapper>
								<Field
									validate={composeValidators(validations.required, validations.mustBePassword)}
									name={'password'}
								>
									{({ input, meta }) => (
										<Input
											error={meta.touched && !meta.active && meta.error}
											invalid={meta.error && meta.touched}
											label={'Password'}
											type={'password'}
											{...input}
										/>
									)}
								</Field>
							</InputWrapper>
							<InputWrapper>
								<Field
									validate={composeValidators(validations.required, validations.mustBePassword)}
									name={'confirm_password'}
								>
								{({ input, meta }) => (
									<Input
										error={meta.touched && !meta.active && meta.error}
										invalid={meta.error && meta.touched}
										label={'Confirm password'}
										type={'password'}
										{...input}
									/>
								)}
								</Field>
							</InputWrapper>
						</>
						)
					}
					<Button with_gradient type={'submit'}>{isSettingNewPassword ? 'Reset password' : 'Send'}</Button>
					<br/>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default WithWidth(PasswordResetPanel);