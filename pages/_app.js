import GlobalStyle from '../src/components/Globalstyle';
import Layout from '../src/components/layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
