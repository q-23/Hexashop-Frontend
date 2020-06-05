import styled from 'styled-components';

const HeaderWrapper = styled.header`
	{
		width: 100%;
	}
	${({ main }) => main && `
		@media (min-width: 640px) {
			{
				max-width: 640px;
			}
		}
		
		@media (min-width: 768px) {
			{
				max-width: 768px;
			}
		}
		
		@media (min-width: 1024px) {
			{
				max-width: 1024px;
			}
		}
		
		@media (min-width: 1280px) {
			{
				max-width: 1280px;
			}
		}
	`}
	${({ mx_auto }) => mx_auto && `
		margin-left: auto;
		margin-right: auto;
	`}
`;

export default Container;
