import styled, { css } from 'styled-components';

const StyledInput = styled.input`
	${({ variant }) =>
		variant === 'inputfield' &&
		css`
			border-radius: 12px;
			margin: 0.5rem;
			width: 30rem;
			padding: 0.75rem;
			padding-top: 1.8rem;
			padding-bottom: 1rem;
			background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
			border: white;
			font-family: sans-serif;
			font-size: 1.8em;
			outline: none;
			border: 1px solid #004ba3;
		`}
`;

export default StyledInput;
