import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./carousel.css";
import { type ResponsiveUnit, getResponsiveUnit } from "./responsive-unit";

type Props = {
	padding?: ResponsiveUnit;
	gap?: ResponsiveUnit;
	children: ReadonlyArray<React.ReactNode>;
};

const Carousel = ({ padding, gap, children }: Props) => {
	const paddings = getResponsiveUnit(padding);
	const gaps = getResponsiveUnit(gap);
	return (
		<div
			className={styles.carousel}
			style={assignInlineVars({
				[styles.paddingMobile]: paddings.mobile,
				[styles.paddingDesktop]: paddings.desktop,
				[styles.gapMobile]: gaps.mobile,
				[styles.gapDesktop]: gaps.desktop,
			})}
		>
			{children.map((child, index) => (
				<div key={index} className={styles.slide}>
					{child}
				</div>
			))}
		</div>
	);
};

export default Carousel;
