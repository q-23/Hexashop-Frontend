import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import validations from "components/Validation";
import Button from "components/_Shared/Button";
import Input from "components/_Shared/Input";

import { Link } from "react-router-dom";
import { Field } from 'react-final-form';

import { PasswordResetImage } from "./PasswordResetPanel.style";

import img from 'assets/forgot_password.jpg';

const PasswordResetPanel = () => {

	return (
		<>
			<BoxHeaderContainer>
				<BoxName>Reset your password</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'center'} styles={'margin: 10em 0; position: relative;'}>
				{/*<PasswordResetImage src={img}/>*/}
				<FlexItem xs={12} md={8} lg={6} xl={4} align={'center'} styles={'z-index: 2'}>
					<Field
						validate={validations.required}
						name={'email'}
					>
						{({ input, meta }) => (
							<Input
								invalid={meta.error && meta.touched}
								label={'E-mail'}
								key={'email'}
								{...input}
							/>
							)}
					</Field>
					<Button with_gradient type={'submit'}>Send</Button>
					<br/>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default PasswordResetPanel;