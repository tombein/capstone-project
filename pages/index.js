import Form from '../src/components/Form/Form';
import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/CardMap/CardList'), { ssr: false });

export default function Home() {
	return (
		<main>
			<CardList />
			<Form />
		</main>
	);
}
