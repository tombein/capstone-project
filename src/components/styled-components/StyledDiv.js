import styled from 'styled-components';

const StyledDiv = styled.div`
	${({ variant }) =>
		variant === 'styledDiv' &&
		`
	_padding: 10px;
	_margin: 10px;
	border-radius: 5 px;
	box-shadow: 2px 2px 8px grey;
`}
	${({ variant }) =>
		variant === 'reserved' &&
		`
padding: 1rem 3rem 1rem 3rem;
		height: 7rem;
		width: 24rem;
outline: dotted red;
position: absolute;
top: 6rem;
right: 5rem;
background-color: grey;
`}
`;
export default StyledDiv;
