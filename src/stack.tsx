import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./stack.css";
import { type Gap, getResponsiveGap } from "./responsive-gap";

type Props = {
	space: Gap;
	children: React.ReactNode;
};

const Stack = ({ space, children }: Props) => {
	const gap = getResponsiveGap(space);
	return (
		<div
			className={styles.stack}
			style={assignInlineVars({
				[styles.gapMobile]: gap.mobile,
				[styles.gapDesktop]: gap.desktop,
			})}
		>
			{children}
		</div>
	);
};

export default Stack;
