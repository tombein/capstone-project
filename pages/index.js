import StyledLanding from '../src/components/styled-components/StyledLanding';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<StyledLanding>
				<Image src="/logo.png" alt="logo" width={400} height={400} />
			</StyledLanding>
		</main>
	);
}
