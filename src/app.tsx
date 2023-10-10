import Carousel from "./carousel";
import Inline from "./inline";
import Placeholder from "./placeholder";
import { type ResponsiveUnit } from "./responsive-unit";
import Shell from "./shell";
import Stack from "./stack";

const carouselGap: ResponsiveUnit = [16, 32];
const screenEdgeSpace: ResponsiveUnit = [16, 32];

const App = () => (
	<Shell
		header={<Placeholder>Header</Placeholder>}
		nav={<Placeholder height="100%">Navigation</Placeholder>}
		main={
			<Stack space={[16, 32]}>
				<Inline space={screenEdgeSpace}>
					<Carousel gap={carouselGap}>
						<Placeholder width={250}>Slide 1</Placeholder>
						<Placeholder width={250}>Slide 2</Placeholder>
						<Placeholder width={250}>Slide 3</Placeholder>
						<Placeholder width={250}>Slide 4</Placeholder>
					</Carousel>
					<Placeholder height="100vh">Main 2</Placeholder>
				</Inline>
				<Carousel gap={carouselGap} padding={screenEdgeSpace}>
					<Placeholder width={250}>Slide 1</Placeholder>
					<Placeholder width={250}>Slide 2</Placeholder>
					<Placeholder width={250}>Slide 3</Placeholder>
					<Placeholder width={250}>Slide 4</Placeholder>
				</Carousel>
				<Inline space={screenEdgeSpace}>
					<Placeholder height="20vh">Main 3</Placeholder>
					<Placeholder height="100vh">Main 4</Placeholder>
				</Inline>
			</Stack>
		}
		footer={<Placeholder>Footer</Placeholder>}
	/>
);

export default App;
