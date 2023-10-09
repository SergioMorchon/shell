import * as styles from "./shell.css";

type Props = Record<"header" | "nav" | "main" | "footer", React.ReactNode>;

const Shell = ({ header, nav, main, footer }: Props) => (
	<div className={styles.shell}>
		<header className={styles.header}>{header}</header>
		<nav className={styles.nav}>{nav}</nav>
		<main className={styles.main}>{main}</main>
		<footer className={styles.footer}>{footer}</footer>
	</div>
);

export default Shell;
