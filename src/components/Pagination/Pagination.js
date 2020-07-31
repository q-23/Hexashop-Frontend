import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import {
	PaginationArrowButton,
	PaginationButton } from "components/Pagination/Pagination.style";
import FlexContainer from "components/_Shared/FlexContainer";
import Icon from "components/_Shared/Icon";
import {useStateValuePagination} from "contexts/pagination/pagination";
import paginationActions from "contexts/pagination/actions";

const Pagination = () => {
	const [pagination, dispatch] = useStateValuePagination();

	const paginate = (currentPage, nrOfPages) => {
		const delta = 2;
		const	range = [];
		const rangeWithDots = [];
		let l;

		range.push(1);

		if (nrOfPages <= 1) {
			return range;
		}

		for (let i = currentPage - delta; i <= currentPage + delta; i++) {
			if (i < nrOfPages && i > 1) {
				range.push(i);
			}
		}
		range.push(nrOfPages);

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}
		return rangeWithDots;
	};

	return(
		<BoxHeaderContainer variant_down>
			<FlexContainer justify={'center'} align={'center'} styles={'height: 100%'}>
				{pagination.numberOfPages > 1 && (
					<>
						<PaginationArrowButton  onClick={() => dispatch({ type: paginationActions.PREVIOUS_PAGE })}>
							<Icon className={'fa fa-arrow-left'}/>
						</PaginationArrowButton>
							{paginate(pagination.currentPage, pagination.numberOfPages).map(el => (
								<PaginationButton
									key={el}
									current={el === pagination.currentPage}
									dots={typeof el === 'string'}
									onClick={() => dispatch({ type: paginationActions.SELECT_PAGE, payload: el })}
								>
									{el}
								</PaginationButton>
							))}
						<PaginationArrowButton onClick={() => dispatch({ type: paginationActions.NEXT_PAGE })}>
							<Icon className={'fa fa-arrow-right'}/>
						</PaginationArrowButton>
					</>
				)}
			</FlexContainer>
		</BoxHeaderContainer>
	)
};

export default Pagination;