import styled from 'styled-components';

const StyledSection = styled.section`
	${({ variant }) =>
		variant === 'footer' &&
		`

	display: flex;
	height: 8rem;
	width: 100vw;
	justify-content: space-around;
	align-items: center;
    `}
	${({ variant }) =>
		variant === 'cardinfo' &&
		`
	display: flex;
	justify-content: space-between;
	margin: 2rem 0 2rem 0;
	
    `}
`;

export default StyledSection;
