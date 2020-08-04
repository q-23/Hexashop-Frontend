import React from "react";
import {
	SpinnerCircle,
	SpinnerContainer,
	SpinnerOverlay
} from "./Loader.style";

const Loader = ({ children, isLoading }) => {
	return(
		<SpinnerContainer>
			<SpinnerOverlay isLoading={isLoading}/>
			<SpinnerCircle  isLoading={isLoading}/>
			{children}
		</SpinnerContainer>
	)
};

export default Loader;