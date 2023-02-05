import { useAtom } from "jotai";
import { breedListAtom } from "../atoms";

const top10 = [
  "raga",
  "mcoo",
  "ragd",
  "lihu",
  "beng",
  "asho",
  "abys",
  "siam",
  "sfol",
  "tonk",
];

const MostSearched = () => {
  const [breedList] = useAtom(breedListAtom);
  const mostSearchedCats = breedList.filter((breed) => {
    return top10.includes(breed.id);
  });
  console.log(mostSearchedCats);

  return (
    <main className="flex h-full w-full flex-col px-8 md:px-12 lg:mx-auto lg:max-w-7xl lg:px-16 uw:max-w-[90rem]">
      <div>
        <h1 className="mb-4 flex text-4xl font-bold underline underline-offset-2">
          Top 10 Most Searched Breeds
        </h1>
        <div className="flex flex-col py-2">
          {mostSearchedCats?.map((cat, index) => {
            return (
              <div
                className="flex flex-col gap-y-4 py-3 md:flex-row md:gap-x-4"
                key={cat.id}
              >
                <img
                  className="aspect-square h-32 w-32 self-center rounded-3xl md:h-52 md:w-52"
                  src={
                    cat.id !== "beng"
                      ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
                      : `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.png`
                  }
                  alt={cat.name}
                />
                <div className={`flex flex-col text-[#291507]`}>
                  <div className="self-center text-3xl font-semibold md:self-auto md:text-4xl">
                    {index + 1}. {cat.name}
                  </div>
                  <div className="text-justify text-lg font-medium">
                    {cat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MostSearched;
