import React from "react";
import {
	SpinnerCircle,
	SpinnerContainer,
	SpinnerOverlay
} from "./Loader.style";

const Loader = ({ isLoading }) => {
	return(
		<SpinnerContainer isLoading={isLoading}>
			<SpinnerOverlay/>
			<SpinnerCircle/>
		</SpinnerContainer>
	)
};

export default Loader;