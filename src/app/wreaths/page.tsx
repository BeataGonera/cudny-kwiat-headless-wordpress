import { getPosts } from "@/api/lib";
import Image from "next/image";

const WreathsPage = async () => {
  const posts = await getPosts();

  return (
    <main className="flex flex-col ">
      <div>
        {posts.map((post: any, index: number) => (
          <section
            className="flex h-fit w-screen flex-col lg:flex-row"
            key={index}
          >
            <div className="relative h-[300px] w-screen lg:h-auto lg:w-1/2">
              <Image
                src="/christmas.png"
                alt="flowers"
                fill
                objectFit="cover"
              />
            </div>
            <article className="flex h-fit w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-center text-2xl lg:w-1/2 lg:px-24 ">
              <h3>Dekoracje świąteczne</h3>
              <p className="w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
                Dowiedz się więcej
              </button>
            </article>
          </section>
        ))}
      </div>
    </main>
  );
};

export default WreathsPage;
