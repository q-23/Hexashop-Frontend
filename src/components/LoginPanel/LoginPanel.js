import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import Button from "components/_Shared/Button";
import Input from "components/_Shared/Input";
import {RegisterBox} from "components/LoginPanel/LoginPanel.style";
import validations from "components/Validation";
import { Link } from "react-router-dom";
import { Field } from 'react-final-form';
import {LoginImage} from "components/LoginPanel/LoginPanel.style";
import img from 'assets/login.png';
const LoginPanel = () => {

	return (
		<>
			<BoxHeaderContainer>
				<BoxName>Log in</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'center'} styles={'margin: 10em 0; position: relative;'}>
				<LoginImage src={img}/>
				<FlexItem xs={12} md={8} lg={6} xl={4} align={'center'}>
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
					<Field
						validate={validations.required}
						name={'password'}
					>
						{({ input, meta }) => (
							<Input
								invalid={meta.error && meta.touched}
								label={'Password'}
								type={'password'}
								key={'password'}
								{...input}
							/>
							)}
					</Field>
					<Button with_gradient type={'submit'}>Log in</Button>
					<br/>
					<RegisterBox>
						or <Link to={'/register'}>Register</Link>
					</RegisterBox>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default LoginPanel;