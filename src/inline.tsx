import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./inline.css";
import { type Gap, getResponsiveGap } from "./responsive-gap";

type Props = {
	space: Gap;
	children: React.ReactNode;
};

const Inline = ({ space, children }: Props) => {
	const gap = getResponsiveGap(space);
	return (
		<div
			className={styles.inline}
			style={assignInlineVars({
				[styles.gapMobile]: gap.mobile,
				[styles.gapDesktop]: gap.desktop,
			})}
		>
			{children}
		</div>
	);
};

export default Inline;
