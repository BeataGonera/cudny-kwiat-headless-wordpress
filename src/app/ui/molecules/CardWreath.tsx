import { Wreath } from "@/types/wreath";
import { FC } from "react";

type CardWreathProps = {
  wreath: Wreath;
};
const CardWreath: FC<CardWreathProps> = ({ wreath }) => {
  return (
    <section className="flex h-full w-screen flex-col lg:flex-row [&:nth-child(even)]:flex-row-reverse">
      <div className="relative h-full w-screen lg:w-1/2 object-cover">
        <img
          src={wreath.image}
          alt={wreath.name}
          className="h-full w-full object-cover"
        />
      </div>
      <article className="flex h-full w-full flex-col items-center justify-between gap-16 bg-primary px-8 py-24 text-2xl lg:w-1/2 lg:px-24 ">
        <h3 className="text-3xl font-bold">{wreath.name}</h3>
        <div className="flex flex-col gap-8">
          <p className="w-full">{wreath.description}</p>
          <p>Średnica: {wreath.diameter}cm</p>
        </div>
        <button className="h-14 w-48 bg-fontprimary text-base text-white hover:opacity-80">
          Do koszyka
        </button>
      </article>
    </section>
  );
};

export default CardWreath;
