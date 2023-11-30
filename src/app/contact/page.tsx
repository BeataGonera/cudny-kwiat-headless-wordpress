import { Cormorant_Garamond } from "next/font/google";

const garamond = Cormorant_Garamond({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
});

const ContactPage = () => {
	return (
		<main>
			<section className="h-screen w-screen bg-[url('/home_background.png')] bg-cover bg-center bg-no-repeat text-2xl">
				<form className="absolute bottom-36 flex w-4/6 flex-col gap-8 p-14">
					<div className="w-72">
						<label
							htmlFor="first_name"
							className="mb-2 block font-sans text-sm font-medium text-white"
						>
							Imię
						</label>
						<input
							type="text"
							id="first_name"
							className="block w-full bg-white bg-opacity-70 p-2.5 text-sm text-gray-900 focus:border-fontprimary focus:ring-fontprimary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-fontprimary dark:focus:ring-fontprimary"
							required
						/>
					</div>
					<div className="w-72">
						<label
							htmlFor="phone_number"
							className="mb-2 block font-sans text-sm font-medium text-white"
						>
							Telefon
						</label>
						<input
							type="text"
							id="phone_number"
							className="block w-full bg-white bg-opacity-70 p-2.5 font-sans text-sm font-light text-fontprimary"
							required
						/>
					</div>
					<div className="flex w-full gap-16">
						<div className="flex w-full flex-col gap-8">
							<label
								htmlFor="message"
								className="mb-2 block font-sans text-sm font-medium text-white"
							>
								Wiadomość
							</label>
							<textarea
								id="message"
								rows={8}
								className="block w-full border bg-white bg-opacity-70 p-2.5 font-sans text-sm font-light text-fontprimary"
							></textarea>
							<button className="h-12 w-48 self-end bg-fontprimary text-base text-white hover:opacity-80">
								Wyślij
							</button>
						</div>
						<div
							className={`${garamond.style} flex flex-col gap-8 pt-12 tracking-widest text-white`}
						>
							<p>cudnykwiat@gmail.com</p>
							<p>+48 123 456 789</p>
						</div>
					</div>
				</form>
			</section>
		</main>
	);
};

export default ContactPage;
