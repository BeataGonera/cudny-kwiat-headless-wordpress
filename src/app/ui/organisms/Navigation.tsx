import { Cormorant_Garamond } from "next/font/google";
import { NameAndLogoBig } from "../molecules/NameAndLogoBig";
import { Name } from "../atoms/Name";
import { ButtonOpenMenu } from "../atoms/ButtonOpenMenu";
import { NavLinks } from "../molecules/NavLinks";
import { LogoSmall } from "../atoms/LogoSmall";

const garamond = Cormorant_Garamond({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

export const Navigation = () => {
	return (
		<>
			<div className="absolute top-0 hidden w-full justify-between p-10 lg:flex">
				<nav
					className={`flex gap-6 bg-none text-white ${garamond.className} h-9 text-base uppercase tracking-widest`}
				>
					<NavLinks />
				</nav>
				<NameAndLogoBig />
			</div>

			<div className="absolute left-5 top-5 flex h-1/2 flex-col justify-between lg:hidden">
				<LogoSmall />
				<Name />
			</div>
			<ButtonOpenMenu />
		</>
	);
};
