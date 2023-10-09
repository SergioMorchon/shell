import Inline from "./inline";
import Placeholder from "./placeholder";
import Shell from "./shell";
import Stack from "./stack";

const App = () => (
	<Shell
		header={<Placeholder>Header</Placeholder>}
		nav={<Placeholder height="100%">Navigation</Placeholder>}
		main={
			<Stack space={[16, 32]}>
				<Inline space={[16, 32]}>
					<Placeholder height="20vh">Main 1</Placeholder>
					<Placeholder height="100vh">Main 2</Placeholder>
				</Inline>
				<Inline space={[16, 32]}>
					<Placeholder height="20vh">Main 3</Placeholder>
					<Placeholder height="100vh">Main 4</Placeholder>
				</Inline>
			</Stack>
		}
		footer={<Placeholder>Footer</Placeholder>}
	/>
);

export default App;
