"use client";
import { useIsDrawerOpenStore } from "@/state/isMenuDrawerOpen";
import { IconMenuMobile } from "./IconMenuMobile";

export const ButtonOpenMenu = () => {
	const { setIsMenuDrawerOpen } = useIsDrawerOpenStore();
	return (
		<button onClick={() => setIsMenuDrawerOpen(true)} className="fixed right-5 top-5 lg:hidden">
			<IconMenuMobile />
		</button>
	);
};
