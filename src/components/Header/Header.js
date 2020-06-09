import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import { HeaderStyle } from "./Header.style";
import Image from "components/_Shared/Image";

import logo from 'assets/images/logo.png';

const Header = () => {
	return (
		<HeaderStyle>
			<FlexContainer>
				<FlexItem m_auto>
					<Image src={logo} alt={'logo'} styles={'margin: 0 auto; height: 10em; transform: translateY(-2em);'}/>
				</FlexItem>
			</FlexContainer>
		</HeaderStyle>
	)
};

export default Header;