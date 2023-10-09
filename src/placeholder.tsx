type Props = {
	height?: number | string;
	children?: React.ReactNode;
};

const Placeholder = ({ height = 120, children }: Props) => (
	<div
		style={{
			width: "auto",
			height,
			background: "#eee",
			border: "2px solid #fff",
			boxSizing: "border-box",
			display: "grid",
			placeItems: "center",
		}}
	>
		{children}
	</div>
);

export default Placeholder;
