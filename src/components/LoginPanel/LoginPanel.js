import React, { useState } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import Input from "components/_Shared/Input";
import { Field } from 'react-final-form';
import Button from "components/_Shared/Button";

const LoginPanel = () => {

	return (
		<>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'center'} styles={'margin: 10em 0'}>
				<FlexItem xs={12} md={8} lg={6} xl={4} align={'center'}>
					<Field name={'email'}>
						{({ input }) => (
						<Input label={'E-mail'} {...input} key={'email'}/>
							)}
					</Field>
					<Field name={'password'}>
						{({ input }) => (
						<Input label={'Password'} type={'password'} {...input} key={'password'}/>
							)}
					</Field>
					<Button with_gradient type={'submit'}>Login</Button>
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default LoginPanel;