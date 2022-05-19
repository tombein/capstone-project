import CardList from '../src/components/CardMap/CardList';
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
			<CardList postdata={data} />
		</main>
	);
}
