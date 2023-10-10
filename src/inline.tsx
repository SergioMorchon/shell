import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./inline.css";
import { type ResponsiveUnit, getResponsiveUnit } from "./responsive-unit";

type Props = {
	space: ResponsiveUnit;
	children: React.ReactNode;
};

const Inline = ({ space, children }: Props) => {
	const gap = getResponsiveUnit(space);
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
