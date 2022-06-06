import styled from 'styled-components';

const StyledCard = styled.section`
	border: 0px solid black;
	border-radius: 15px;
	background-image: linear-gradient(
		to right,
		#132a13 0%,
		#31572c 19%,
		#4f772d 42%,
		#90a955 79%,
		#ecf39e 100%
	);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 25rem;
	width: 45rem;
	margin: 0 2rem 3rem 2rem;
	box-shadow: 0 0 3rem rgba(0, 0, 0, 0.7);
	color: #e5e5e5;
`;

export default StyledCard;
