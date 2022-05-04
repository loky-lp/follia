// Next.js core components
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';

class KatangaDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	};

	render(): JSX.Element {
		// noinspection HtmlUnknownTarget,HtmlRequiredTitleElement
		return (
			<Html>
				<Head>
					<link rel='shortcut icon' href='/favicon.ico' />
					<link href='https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap' rel="stylesheet" />
					<link href='https://fonts.googleapis.com/css2?family=Quicksand&display=swap' rel="stylesheet" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default KatangaDocument;
