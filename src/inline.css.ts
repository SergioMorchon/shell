import { createVar, style } from "@vanilla-extract/css";
import { desktop } from "./viewports.css";
import { gapTransition } from "./transitions.css";

export const gapMobile = createVar();
export const gapDesktop = createVar();

export const inline = style([
	gapTransition,
	{
		display: "grid",
		gridAutoFlow: "column",
		gap: gapMobile,

		"@media": {
			[desktop]: {
				gap: gapDesktop,
			},
		},
	},
]);
