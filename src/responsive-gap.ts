type Unit = number | string;

export type Gap = Unit | [Unit, Unit];

const getGap = (gap: Unit) => (typeof gap === "number" ? `${gap}px` : gap);

export const getResponsiveGap = (gap: Gap) => {
	const [gapMobile, gapDesktop] = Array.isArray(gap) ? gap : [gap, gap];
	return {
		mobile: getGap(gapMobile),
		desktop: getGap(gapDesktop),
	};
};
