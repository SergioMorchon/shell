import Placeholder from "./placeholder";
import Shell from "./shell";

const App = () => (
	<Shell
		header={<Placeholder>Header</Placeholder>}
		nav={<Placeholder height="100%">Navigation</Placeholder>}
		main={<Placeholder height="100vh">Main</Placeholder>}
		footer={<Placeholder>Footer</Placeholder>}
	/>
);

export default App;
