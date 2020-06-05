import React from "react";

import FlexContainer from "../_Shared/FlexContainer";
import FlexItem from "../_Shared/FlexItem";
import logo from '../../assets/logo.png';
import Image from "../_Shared/Image";
import Icon from "../_Shared/Icon";

const Header = () => {

	return (
		<header>
			<FlexContainer>
				<FlexItem m_auto>
					<Icon className="fa fa-github" size={'2.25rem'}/>
				</FlexItem>
				<FlexItem>
					<Image src={logo} alt={'logo'} styles={'margin: 0 auto'}/>
				</FlexItem>
				<FlexItem m_auto>
					<Icon className="fa fa-shopping-bag" size={'2.25rem'} padding={'0 20px'}/>
					<Icon className="fa fa-search" size={'2.25rem'}/>
				</FlexItem>
			</FlexContainer>
			<hr/>
		</header>
	)
};

export default Header;