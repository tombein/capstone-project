import Link from 'next/link';
import StyledFooter from './styled-components/StyledFooter';

export default function Footer() {
	return (
		<StyledFooter>
			<nav>
				<li>
					<Link passHref href="/cards">
						<a>Cards</a>
					</Link>
				</li>
				<li>
					<Link passHref href="/createCard">
						<a>CardForm</a>
					</Link>
				</li>
				<li>
					<Link passHref href="/bookmark">
						<a>bookmark</a>
					</Link>
				</li>
			</nav>
		</StyledFooter>
	);
}
