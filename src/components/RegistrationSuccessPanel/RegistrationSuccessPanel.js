import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import BoxName from "components/_Shared/BoxName";
import {SuccessImage} from "./RegistrationSuccessPanel.style";
import img from 'assets/registration_success.jpg';
const RegistrationSuccessPanel = ({ message }) => {

	return (
		<>
			<BoxHeaderContainer>
				<BoxName>E-mail verification</BoxName>
			</BoxHeaderContainer>
			<FlexContainer wrap={'wrap'} padding={'1em'} justify={'center'} styles={'margin: 5em 0; position: relative;'}>
				<FlexItem xs={12} align={'center'}>
					<SuccessImage src={img}/>
				</FlexItem>
				<FlexItem xs={12} md={6} align={'center'} styles={'margin-top: 5rem'}>
					{message}
				</FlexItem>
			</FlexContainer>
		</>
	)
};

export default RegistrationSuccessPanel;