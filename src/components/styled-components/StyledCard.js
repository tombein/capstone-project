import styled from 'styled-components';

const StyledCard = styled.section`
	border: 0px solid black;
	border-radius: 10px;
	background-color: var(--card-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 20rem;
	width: 35rem;
	margin: 0 2rem 3rem 2rem;
	box-shadow: 0 0 3rem rgba(0, 0, 0, 0.7);
`;

export default StyledCard;
