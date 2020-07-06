import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import {PaginationButton} from "components/Pagination/Pagination.style";
import FlexContainer from "components/_Shared/FlexContainer";
import Icon from "components/_Shared/Icon";

const Pagination = () => {

	return(
		<BoxHeaderContainer variant_down>
			<FlexContainer justify={'center'} align={'center'} styles={'height: 100%'}>
				<PaginationButton>
					<Icon className={'fa fa-arrow-left'}/>
				</PaginationButton>
				Paginacja
				<PaginationButton>
					<Icon className={'fa fa-arrow-right'}/>
				</PaginationButton>
			</FlexContainer>
		</BoxHeaderContainer>
	)
};

export default Pagination;