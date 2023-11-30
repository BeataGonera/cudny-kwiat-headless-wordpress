"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";

export const ActiveLink = ({ href, children }: { href: Route; children: ReactNode }) => {
	const checkIfIsActive = () => {
		if (href.length === 1) {
			return currentPathname === href;
		} else {
			return currentPathname.startsWith(href);
		}
	};
	const currentPathname = usePathname();
	const ariaCurrent = href === currentPathname ? "page" : undefined;
	const isActive = checkIfIsActive();

	return (
		<Link
			href={href}
			aria-current={ariaCurrent}
			className={isActive ? "border-fontprimary w-fit border-b lg:border-white" : ""}
		>
			{children}
		</Link>
	);
};
