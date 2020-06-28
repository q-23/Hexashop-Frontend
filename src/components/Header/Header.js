import React from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import { HeaderStyle } from "./Header.style";
import Image from "components/_Shared/Image";

import { Link } from "react-router-dom";

import logo from 'assets/images/logo.png';

const Header = () => {

	return (
		<HeaderStyle>
			<FlexContainer>
				<FlexItem m_auto>
					<Link to={'/'}>
						<Image src={logo} alt={'logo'} styles={'margin: 0 auto; height: 10em; transform: translateY(-2em);'} />
					</Link>
				</FlexItem>
			</FlexContainer>
		</HeaderStyle>
	)
};

export default Header;