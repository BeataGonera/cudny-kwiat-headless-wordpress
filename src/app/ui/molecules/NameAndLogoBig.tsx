import { Logo } from "../atoms/Logo";
import { Name } from "../atoms/Name";

export const NameAndLogoBig = () => {
	return (
		<section className="flex gap-4">
			<Name />
			<Logo />
		</section>
	);
};
