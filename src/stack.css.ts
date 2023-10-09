import { createVar, style } from "@vanilla-extract/css";
import { desktop } from "./viewports.css";
import { gapTransition } from "./transitions.css";

export const gapMobile = createVar();
export const gapDesktop = createVar();

export const stack = style([
	gapTransition,
	{
		display: "grid",
		gridAutoFlow: "row",
		gap: gapMobile,

		"@media": {
			[desktop]: {
				gap: gapDesktop,
			},
		},
	},
]);
