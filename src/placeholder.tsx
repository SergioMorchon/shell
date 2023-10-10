type Props = {
	height?: number | string;
	width?: number | string;
	children?: React.ReactNode;
};

const Placeholder = ({ height = 120, width = "auto", children }: Props) => (
	<div
		style={{
			width,
			height,
			background: "#eee",
			border: "2px solid #aaa",
			boxSizing: "border-box",
			display: "grid",
			placeItems: "center",
		}}
	>
		{children}
	</div>
);

export default Placeholder;
