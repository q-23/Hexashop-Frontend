import React from "react";
import WithWidth from "../../components/WithWidth/WithWidth";
const HomePage = (props) => {
	return(
		<div>
			{console.log(props)}
			<h1>Home Page</h1>
		</div>
	)
};

export default WithWidth(HomePage);