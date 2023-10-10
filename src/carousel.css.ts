import { createVar, style } from "@vanilla-extract/css";
import { desktop } from "./viewports.css";

export const paddingMobile = createVar();
export const paddingDesktop = createVar();

export const gapMobile = createVar();
export const gapDesktop = createVar();

const getSpacingStyles = ({
	gap,
	padding,
}: Record<"gap" | "padding", string>) =>
	({
		width: `calc(100%-2*${padding})`,
		padding: padding,
		scrollPadding: `0 ${padding}`,
		gap: gap,
	} as const);

export const carousel = style({
	overflowX: "scroll",
	scrollSnapType: "x mandatory",
	display: "flex",
	...getSpacingStyles({
		gap: gapMobile,
		padding: paddingMobile,
	}),

	"@media": {
		[desktop]: getSpacingStyles({
			gap: gapDesktop,
			padding: paddingDesktop,
		}),
	},
});

export const slide = style({
	scrollSnapAlign: "start",
});
