import Carousel from "./carousel";
import Inline from "./inline";
import Placeholder from "./placeholder";
import { type ResponsiveUnit } from "./responsive-unit";
import Shell from "./shell";
import Stack from "./stack";
import { type ModalComponent, useDialog } from "./dialog";
import { useState } from "react";

const carouselGap: ResponsiveUnit = [16, 32];
const screenEdgeSpace: ResponsiveUnit = [16, 32];

const TextDialog: ModalComponent<string> = ({ onClose }) => {
	const [text, setText] = useState("");
	return (
		<form method="dialog" onSubmit={() => onClose(text)}>
			<input value={text} onChange={(event) => setText(event.target.value)} />
			<button>Submit</button>
		</form>
	);
};

const DialogSample = () => {
	const { dialog, showModal } = useDialog<string>();
	const [text, setText] = useState<string>("");

	return (
		<Inline space={8}>
			<button
				onClick={() =>
					showModal(TextDialog).then((response) => {
						if (response !== null) setText(response);
					})
				}
			>
				Show modal text dialog
			</button>
			<div>Current text: "{text}"</div>
			{dialog}
		</Inline>
	);
};

const CarouselSample = () => {
	const [index, setIndex] = useState(0);

	return (
		<Stack space={4}>
			<Carousel gap={carouselGap} padding={screenEdgeSpace} onChange={setIndex}>
				<Placeholder width={250}>Slide 1</Placeholder>
				<Placeholder width={250}>Slide 2</Placeholder>
				<Placeholder width={250}>Slide 3</Placeholder>
				<Placeholder width={250}>Slide 4</Placeholder>
			</Carousel>
			Selected index: {index}
		</Stack>
	);
};

const App = () => (
	<Shell
		header={<Placeholder>Header</Placeholder>}
		nav={<Placeholder height="100%">Navigation</Placeholder>}
		main={
			<Stack space={[16, 32]}>
				<DialogSample />
				<Placeholder height="100vh">Main 2</Placeholder>
				<CarouselSample />
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
