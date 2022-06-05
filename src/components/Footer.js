import Link from 'next/link';
import StyledFooter from './styled-components/StyledFooter';
import StyledSection from './styled-components/StyledSection';
import MySVG from './SVG';

export default function Footer() {
	return (
		<StyledFooter>
			<StyledSection variant="footer">
				<article>
					<Link passHref href="/">
						<div>
							<MySVG variant="home" size="4rem" color="white" />
						</div>
					</Link>
				</article>
				<article>
					<Link passHref href="/posts">
						<div>
							<MySVG variant="posts" size="4rem" color="white" />
						</div>
					</Link>
				</article>
				<article>
					<Link passHref href="/insert">
						<div>
							<MySVG variant="insert" size="4rem" color="white" />
						</div>
					</Link>
				</article>
				<article>
					<Link passHref href="/bookmark">
						<div>
							<MySVG variant="bookmark" size="4rem" color="white" />
						</div>
					</Link>
				</article>
				<article>
					<Link passHref href="/map">
						<div>
							<MySVG variant="map" size="4rem" color="white" />
						</div>
					</Link>
				</article>
			</StyledSection>
		</StyledFooter>
	);
}
