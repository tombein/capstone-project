import styled from 'styled-components';

const StyledReservedButton = styled.button`
	border-radius: 15px;
	margin: 0.5rem;
	width: 15rem;
	padding: 0.75rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	color: white;
	background: none;
	background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
	&:hover {
		transform: scale(1.1);
	}
`;

export default StyledReservedButton;
