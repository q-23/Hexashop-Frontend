import React, { useEffect, useState } from 'react';

const WithWidth = WrappedComponent => {

	const ComponentWithWidth = (props) => {
		const [widthInfo, setWidthInfo] = useState('xs')

		const returnBreakpoint = width => {
			let breakpoint = '';
			if(width <= 640) breakpoint = 'xs'
			if(width > 640) breakpoint = 'sm'
			if(width > 768) breakpoint = 'md'
			if(width > 1024) breakpoint = 'lg'
			if(width > 1280) breakpoint = 'xl'

			return breakpoint;
		}

		useEffect(() => {
			window.addEventListener('resize', e => setWidthInfo(returnBreakpoint(e.target.innerWidth)));
			setWidthInfo(returnBreakpoint(window.innerWidth))
			return () => window.removeEventListener('resize', e => setWidthInfo(returnBreakpoint(e.target.innerWidth)));
		}, [])
		return <WrappedComponent {...props} width={widthInfo} />
	};
	return ComponentWithWidth;
};

export default WithWidth