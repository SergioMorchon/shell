import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./carousel.css";
import { type ResponsiveUnit, getResponsiveUnit } from "./responsive-unit";

/**
 * This assumes that every slide has thee same wdith
 */
const useSlideIndex = (element: HTMLElement | null) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!element) {
			return;
		}

		const onScroll = () => {
			setIndex(
				Math.round(
					(element.scrollLeft / (element.scrollWidth - element.offsetWidth)) *
						(element.childNodes.length - 1)
				)
			);
		};

		element.addEventListener("scroll", onScroll);
		return () => {
			element.removeEventListener("scroll", onScroll);
		};
	}, [element]);

	return index;
};

type Props = {
	padding?: ResponsiveUnit;
	gap?: ResponsiveUnit;
	children: ReadonlyArray<React.ReactNode>;
	onChange?: (index: number) => void;
};

const Carousel = ({ padding, gap, children, onChange }: Props) => {
	const [element, setElement] = useState<HTMLDivElement | null>(null);
	const paddings = getResponsiveUnit(padding);
	const gaps = getResponsiveUnit(gap);
	const index = useSlideIndex(element);

	useEffect(() => {
		onChange?.(index);
	}, [index, onChange]);

	return (
		<div
			ref={setElement}
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
