import styled from 'styled-components';

const StyledUnreservedButton = styled.button`
	border-radius: 2rem;

	color: white;
	background: none;
	background-image: linear-gradient(
		to right,
		#132a13 0%,
		#31572c 19%,
		#4f772d 42%,
		#90a955 79%,
		#ecf39e 100%
	);
	&:hover {
		color: black;
		outline: dotted black;
	}
`;

export default StyledUnreservedButton;
