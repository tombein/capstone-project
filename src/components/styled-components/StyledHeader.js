import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: var(--main-color);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	position: fixed;
	width: 100vw;
	height: 8rem;
	z-index: 10;
`;

export default StyledHeader;
