import dynamic from 'next/dynamic';
const CardList = dynamic(() => import('../src/components/CardMap/CardList'), { ssr: false });

const BookmarkList = dynamic(() => import('../src/components/BookmarkList/BookmarkList'), {
	ssr: false,
});
const Form = dynamic(() => import('../src/components/Form/Form'), {
	ssr: false,
});

export default function Home() {
	return (
		<main>
			<CardList />
			<Form />
			<BookmarkList />
		</main>
	);
}
