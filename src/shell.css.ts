import { style } from "@vanilla-extract/css";

const areas = {
	header: "header",
	nav: "nav",
	main: "main",
	footer: "footer",
} as const;

export const shell = style({
	height: "100vh",
	maxHeight: "100vh",
	display: "grid",
	transition: "gap 0.2s",

	gridTemplateAreas: `
		"${areas.header}"
		"${areas.main}"
		"${areas.footer}"
		"${areas.nav}"
	`,
	gridTemplateRows: "min-content 1fr min-content min-content",
	gap: 16,

	"@media": {
		"screen and (min-width: 480px)": {
			gridTemplateAreas: `
				"${areas.header} ${areas.header}"
				"${areas.nav}    ${areas.main}"
				"${areas.footer} ${areas.footer}"
			`,
			gridTemplateColumns: "200px auto",
			gridTemplateRows: "min-content 1fr min-content",
			gap: 24,
		},
	},
});

const area = style({
	overflow: "auto",
});

export const header = style([
	area,
	{
		gridArea: areas.header,
	},
]);

export const nav = style([
	area,
	{
		gridArea: areas.nav,
	},
]);

export const main = style([
	area,
	{
		gridArea: areas.main,
	},
]);

export const footer = style([
	area,
	{
		gridArea: areas.footer,
	},
]);
