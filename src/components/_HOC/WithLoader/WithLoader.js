import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithLoader.style';

const WithLoader = WrappedComponent => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithLoader;