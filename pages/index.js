import StyledLanding from '../src/components/styled-components/StyledLanding';

export default function Home() {
	return (
		<main>
			<StyledLanding>
				<video autoPlay width="330" height="330">
					<source src="videologo.mp4" type="video/mp4" />
				</video>
			</StyledLanding>
		</main>
	);
}
