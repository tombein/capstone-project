import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: 15px;
	margin: 0.5rem;
	left: 9rem;
	bottom: 2rem;
	width: 15rem;
	border: 0.2rem solid black;
	padding-top: 1rem;
	padding-bottom: 1rem;
	color: white;
	background-color: #80b918;

	transition: 300ms;
	&:hover {
		transform: scale(1.1);
	}
`;

export default StyledButton;
