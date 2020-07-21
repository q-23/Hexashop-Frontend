import React from "react";
import Typography from "components/_Shared/Typography";
import FlexContainer from "components/_Shared/FlexContainer";
import main_image from 'assets/images/startpage_pic.jpg';

const HomePageView = () => {
	return(
		<FlexContainer styles={`background-image: url(${main_image})`}>
			<Typography>Some text...</Typography>
		</FlexContainer>
	)
};

export default HomePageView;