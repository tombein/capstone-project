import StyledLanding from '../src/components/styled-components/StyledLanding';

export default function Home() {
	return (
		<main>
			<StyledLanding>
				<video autoPlay width="600" height="500">
					<source src="videologo.mp4" type="video/mp4" />
				</video>
			</StyledLanding>
		</main>
	);
}
