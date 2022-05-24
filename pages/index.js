import getCardMap from '../src/components/services/get-cardmap';
import Form from '../src/components/Form/Form';
import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/CardMap/CardList'));

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
			<Form />
		</main>
	);
}
