import React from "react";
import logo from '../../assets/logo.png';

const Header = () => {
	return (
		<header className={'mb-6'}>
			<div className={'flex'}>
				<div className={'w-1/3 m-auto'}>
					<i className="fa fa-github m-4 text-3xl" aria-hidden="true"/>
				</div>
				<div className={'w-1/3'}>
					<img src={logo} className={'m-auto'} alt={'logo'}/>
				</div>
				<div className={'w-1/3 m-auto'}>
					<i className="fa fa-shopping-bag float-right m-4 text-2xl" aria-hidden="true"/>
					<i className="fa fa-search float-right  mt-4 text-2xl" aria-hidden="true"/>
				</div>
			</div>
			<hr/>
		</header>
	)
};

export default Header;