import styled from 'styled-components';

const StyledDeleteButton = styled.button`
	border-radius: 2rem;

	color: white;
	background: none;
	background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
	&:hover {
		color: red;
		outline: dotted red;
	}
`;

export default StyledDeleteButton;
