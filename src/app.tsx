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
		<Stack space={8}>
			Current text: "{text}"
			<button
				onClick={() =>
					showModal(TextDialog).then((response) => {
						if (response !== null) setText(response);
					})
				}
			>
				Show modal text dialog
			</button>
			{dialog}
		</Stack>
	);
};

const App = () => (
	<Shell
		header={<Placeholder>Header</Placeholder>}
		nav={<Placeholder height="100%">Navigation</Placeholder>}
		main={
			<Stack space={[16, 32]}>
				<Inline space={screenEdgeSpace}>
					<Carousel gap={carouselGap}>
						<Placeholder width={250}>
							<DialogSample />
						</Placeholder>
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
