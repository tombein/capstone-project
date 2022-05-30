import styled from 'styled-components';
const StyledLabel = styled.label`
	${({ variant }) =>
		variant === 'InputLabel' &&
		`
	position: absolute;
	border: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	display: flex;
	align-items: center;
	padding: 0 53px;
	box-sizing: border-box;
	transition: all 0.1s ease-in-out;
	cursor: text;
	`}
`;

export default StyledLabel;
