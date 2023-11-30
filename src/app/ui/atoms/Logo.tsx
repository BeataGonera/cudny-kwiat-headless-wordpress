import Image from "next/image";

export const Logo = () => {
	return (
		<Image
			src="/logo.png"
			width="208"
			height="208"
			alt="cudny kwiat logo"
			className="row-span-1 opacity-90"
		/>
	);
};
