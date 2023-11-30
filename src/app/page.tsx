import { getPosts } from "@/api/lib";
import Image from "next/image";

type Post = {};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="">
      <section className="h-screen w-screen bg-[url('/home_background.png')] bg-cover bg-center bg-no-repeat text-2xl"></section>
      <section className="flex h-auto w-screen flex-col items-center gap-16 bg-primary px-8 py-24 text-center text-2xl lg:px-96 lg:py-48">
        <h3>Nasze studio działa od 2018r</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
          Dowiedz się więcej
        </button>
      </section>

      <div className="relative h-[300px] w-screen lg:h-[600px]">
        <Image
          src="/home2.png"
          alt="wedding decorations"
          fill
          objectFit="cover"
        />
      </div>

      <section className="flex h-auto w-screen flex-col-reverse lg:flex-row">
        <article className="flex h-fit w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-center text-2xl lg:w-1/2 lg:px-24 ">
          <h3>Dekoracje ślubne</h3>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
            Dowiedz się więcej
          </button>
        </article>
        <div className="relative h-[300px] w-screen lg:h-auto lg:w-1/2">
          <Image src="/wedding.png" alt="flowers" fill objectFit="cover" />
        </div>
      </section>

      <section className="flex h-fit w-screen flex-col lg:flex-row">
        <div className="relative h-[300px] w-screen lg:h-auto lg:w-1/2">
          <Image src="/christmas.png" alt="flowers" fill objectFit="cover" />
        </div>
        <article className="flex h-fit w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-center text-2xl lg:w-1/2 lg:px-24 ">
          <h3>Dekoracje świąteczne</h3>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
            Dowiedz się więcej
          </button>
        </article>
      </section>

      <section className="flex h-auto w-screen flex-col-reverse lg:flex-row">
        <article className="flex h-fit w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-center text-2xl lg:w-1/2 lg:px-24 ">
          <h3>Dekoracje balonowe</h3>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
            Dowiedz się więcej
          </button>
        </article>
        <div className="relative h-[300px] w-screen lg:h-auto lg:w-1/2">
          <Image src="/balloons.png" alt="flowers" fill objectFit="cover" />
        </div>
      </section>

      <section className="flex h-auto w-screen flex-col lg:flex-row">
        <div className="relative h-[300px] w-screen lg:h-auto lg:w-1/2">
          <Image src="/wianek.png" alt="flowers" fill objectFit="cover" />
        </div>
        <article className="flex h-fit w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-center text-2xl lg:w-1/2 lg:px-24 ">
          <h3>Wianki na głowę</h3>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
            Dowiedz się więcej
          </button>
        </article>
      </section>
    </main>
  );
}
