import React from "react";

import BoxHeaderContainer from "components/_Shared/BoxHeaderContainer";
import {
	PaginationArrowButton,
	PaginationButton } from "components/Pagination/Pagination.style";
import FlexContainer from "components/_Shared/FlexContainer";
import Icon from "components/_Shared/Icon";

const Pagination = ({ currentPage = 1, numberOfPages = 1, setPage = () => {} }) => {

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
				{numberOfPages > 1 && (
					<>
						<PaginationArrowButton  onClick={() => currentPage > 1 && setPage(currentPage - 1)}>
							<Icon className={'fa fa-arrow-left'}/>
						</PaginationArrowButton>
							{paginate(currentPage, numberOfPages).map(el => (
								<PaginationButton
									key={el}
									current={el === currentPage}
									dots={typeof el === 'string'}
									onClick={() => setPage(el)}
								>
									{el}
								</PaginationButton>
							))}
						<PaginationArrowButton onClick={() => currentPage < numberOfPages && setPage(currentPage + 1)}>
							<Icon className={'fa fa-arrow-right'}/>
						</PaginationArrowButton>
					</>
				)}
			</FlexContainer>
		</BoxHeaderContainer>
	)
};

export default Pagination;