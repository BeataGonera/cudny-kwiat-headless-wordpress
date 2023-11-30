import { getWreaths } from "@/api/wreaths";
import { Wreath } from "@/types/wreath";
import CardWreath from "../ui/molecules/CardWreath";

const ChristmasPage = async () => {
  const wreaths: Wreath[] = await getWreaths();
  return (
    <main className="w-screen h-screen">
      <section className="w-full h-2/3 bg-fontprimary text-lightPink flex items-end p-10 text-2xl pb-24">
        <p className="lg:w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="h-[40vw]">
        {wreaths.map((wreath) => (
          <CardWreath wreath={wreath} />
        ))}
      </section>
    </main>
  );
};

export default ChristmasPage;
