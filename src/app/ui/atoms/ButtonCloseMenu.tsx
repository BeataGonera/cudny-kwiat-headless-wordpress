"use client";

import { useIsDrawerOpenStore } from "@/state/isMenuDrawerOpen";
import { IconClose } from "./IconClose";

export const ButtonCloseMenu = () => {
	const { setIsMenuDrawerOpen } = useIsDrawerOpenStore();
	return (
		<button className="absolute right-5 top-5" onClick={() => setIsMenuDrawerOpen(false)}>
			<IconClose />
		</button>
	);
};
