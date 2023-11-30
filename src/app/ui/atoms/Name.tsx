import { Cormorant_Garamond, Italiana } from "next/font/google";

const garamond = Cormorant_Garamond({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

const italiana = Italiana({
	weight: "400",
	subsets: ["latin"],
});

export const Name = () => {
	return (
		<div className="flex flex-col justify-center gap-6">
			<h2 className={`${garamond.className} text-3xl font-light tracking-widest text-white`}>
				Studio florystyczne
			</h2>
			<h1 className={`${italiana.className} text-5xl font-light tracking-widest text-white`}>
				Cudny Kwiat
			</h1>
		</div>
	);
};
