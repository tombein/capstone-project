import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'styledDiv' &&
		`
	padding: 10px;
	margin: 10px;
	border-radius: 5 px;
	box-shadow: 2px 2px 8px grey;
`}
`;
export default StyledDiv;
