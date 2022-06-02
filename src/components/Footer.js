import Link from 'next/link';
import StyledFooter from './styled-components/StyledFooter';
import StyledSection from './styled-components/StyledSection';

export default function Footer() {
	return (
		<StyledFooter>
			<StyledSection variant="footer">
				<article>
					<Link passHref href="/">
						<a>Home</a>
					</Link>
				</article>
				<article>
					<Link passHref href="/posts">
						<a>Posts</a>
					</Link>
				</article>
				<article>
					<Link passHref href="/insert">
						<a>Insert</a>
					</Link>
				</article>
				<article>
					<Link passHref href="/bookmark">
						<a>Bookmark</a>
					</Link>
				</article>
				<article>
					<Link passHref href="/map">
						<a>Map</a>
					</Link>
				</article>
			</StyledSection>
		</StyledFooter>
	);
}
