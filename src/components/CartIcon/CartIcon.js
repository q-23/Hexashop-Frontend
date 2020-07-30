import React from "react";

import Icon from "components/_Shared/Icon"
import styled from "styled-components";

import { LIGHT_PURPLE } from "assets/css_variables/colors";

import { useShopcart } from "contexts/shopcart/shopcart";

const ItemCount = styled.span`
	background-color: ${LIGHT_PURPLE};
	position: absolute;
	border-radius: 50%;
	font-weight: bold;
	font-size: 1rem;
	height: 1.3rem;
	width: 1.3rem;
	bottom: 12px;
	color: #FFF;
	left: -5px;
	top: 0;
`;

const IconContainer = styled.div`
	justify-content: center;
	position: relative;
	cursor: pointer;
	display: flex;
	height: 45px;
	width: 45px;
`;

const CartIcon = () => {
	const [{productsCount}] = useShopcart()

	return (
		<IconContainer>
			<Icon className="fa fa-shopping-basket" size={'1.7em'} color={'#FFF'}/>
			<ItemCount>{productsCount}</ItemCount>
		</IconContainer>
	)
};

export default CartIcon;