import React, { useRef, useEffect } from "react";

import FlexContainer from "components/_Shared/FlexContainer";
import FlexItem from "components/_Shared/FlexItem";
import { HeaderStyle } from "./Header.style";
import Image from "components/_Shared/Image";

import logo from 'assets/images/logo.png';

const Header = () => {
	const headerRef = useRef()
	useEffect(()=> {
		const rect = headerRef.current.getBoundingClientRect();
		window.addEventListener('scroll', () => {
			console.log(window.pageYOffset)
			console.log(rect);
		})
	}, [])
	return (
		<HeaderStyle>
			<FlexContainer>
				<FlexItem m_auto>
					<Image src={logo} alt={'logo'} styles={'margin: 0 auto; height: 10em; transform: translateY(-2em);'} ref={headerRef}/>
				</FlexItem>
			</FlexContainer>
		</HeaderStyle>
	)
};

export default Header;