type Primitive = number | string;

export type ResponsiveUnit = Primitive | [Primitive, Primitive];

const getCssValue = (gap: Primitive) =>
	typeof gap === "number" ? `${gap}px` : gap;

export const getResponsiveUnit = (
	gap: ResponsiveUnit | undefined = "unset"
) => {
	const [gapMobile, gapDesktop] = Array.isArray(gap) ? gap : [gap, gap];
	return {
		mobile: getCssValue(gapMobile),
		desktop: getCssValue(gapDesktop),
	};
};
