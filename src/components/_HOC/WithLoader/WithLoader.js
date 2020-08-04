import React from 'react';

import { SpinnerCircle, SpinnerContainer, SpinnerOverlay } from './WithLoader.style';

const WithLoader = WrappedComponent => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerContainer>
				<SpinnerOverlay isLoading={isLoading}/>
				<SpinnerCircle  isLoading={isLoading}/>
				<WrappedComponent {...otherProps} />
			</SpinnerContainer>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithLoader;