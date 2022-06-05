import styled, { css } from 'styled-components';

const StyledInput = styled.input`
	${({ variant }) =>
		variant === 'inputfield' &&
		css`
			display: flex;
			justify-content: center;
			width: 44.1rem;
			max-width: 80%;
			height: 4rem;
			border: 0;
			background-color: var(--main-color);
			border-bottom-left-radius: 41px;
			border-bottom-right-radius: 41px;
			border-top-left-radius: 41px;
			border-top-right-radius: 0;
			box-shadow: 0 17px 40px 0 rgba(75, 128, 182, 0.07);
			margin-bottom: 22px;
			position: relative;
			font-size: 17px;
			color: #a7b4c1;
			transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out,
				box-shadow 0.1s ease-in-out;
		`}
`;

export default StyledInput;
