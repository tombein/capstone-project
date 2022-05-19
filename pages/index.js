import CardMap from '../src/components/CardMap/Cardmap';
import getCardMap from '../src/components/services/get-cardmap';

export function getStaticProps() {
	const data = getCardMap();

	return {
		props: {
			data,
		},
	};
}

export default function Home({ data }) {
	return (
		<main>
			<CardMap postdata={data} />
		</main>
	);
}
