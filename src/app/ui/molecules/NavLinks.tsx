import { ActiveLink } from "../atoms/ActiveLink";

export const NavLinks = () => {
	return (
		<>
			<ActiveLink href="/">Home</ActiveLink>
			<ActiveLink href="/wedding">Ślub</ActiveLink>
			<ActiveLink href="/christmas">Święta</ActiveLink>
			<ActiveLink href="/balloons">Balony</ActiveLink>
			<ActiveLink href="/wreaths">Wieńce</ActiveLink>
			<ActiveLink href="/about">O nas</ActiveLink>
			<ActiveLink href="/contact">Kontakt</ActiveLink>
		</>
	);
};
