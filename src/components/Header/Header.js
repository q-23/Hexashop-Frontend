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
					<Icon className="fa fa-github" size={'2em'}/>
				</FlexItem>
				<FlexItem>
					<Image src={logo} alt={'logo'} styles={'margin: 0 auto; height: 10em;'}/>
				</FlexItem>
				<FlexItem m_auto>
					<Icon className="fa fa-shopping-bag" size={'2em'} padding={'0 20px'}/>
					<Icon className="fa fa-search" size={'2em'}/>
				</FlexItem>
			</FlexContainer>
			<hr/>
		</header>
	)
};

export default Header;