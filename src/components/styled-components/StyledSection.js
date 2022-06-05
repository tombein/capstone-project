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
`;

export default StyledSection;
