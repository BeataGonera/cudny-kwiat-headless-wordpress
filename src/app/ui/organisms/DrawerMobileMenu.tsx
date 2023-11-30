"use client";

import { Cormorant_Garamond } from "next/font/google";
import { ActiveLink } from "../atoms/ActiveLink";
import { ButtonCloseMenu } from "../atoms/ButtonCloseMenu";
import { useIsDrawerOpenStore } from "@/state/isMenuDrawerOpen";

const garamond = Cormorant_Garamond({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

export const DrawerMobileMenu = () => {
	const { isMenuDrawerOpen } = useIsDrawerOpenStore();
	return (
		<div
			className={
				isMenuDrawerOpen
					? `bg-primary fixed right-0 top-0 z-30 flex h-screen w-full justify-center p-10 md:w-4/6 lg:hidden`
					: `hidden`
			}
		>
			<ButtonCloseMenu />
			<nav
				className={`text-fontprimary flex flex-col items-center justify-center gap-6 bg-none ${garamond.className} h-full text-base uppercase tracking-widest`}
			>
				<>
					<ActiveLink href="/">Home</ActiveLink>
					<ActiveLink href="/wedding">Ślub</ActiveLink>
					<ActiveLink href="/christmas">Święta</ActiveLink>
					<ActiveLink href="/balloons">Balony</ActiveLink>
					<ActiveLink href="/wreaths">Wieńce</ActiveLink>
					<ActiveLink href="/about">O nas</ActiveLink>
					<ActiveLink href="/contact">Kontakt</ActiveLink>
				</>
			</nav>
		</div>
	);
};
