/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Breed, catImage } from "../../atoms";
import { catImagesAtom } from "../../atoms";
import TheComponent from "../../components/thecomponent";

const Cat = () => {
  const [catImages, setCatImages] = useAtom(catImagesAtom);
  const [currentBreed, setCurrentBreed] = useState<Breed>();
  const router = useRouter();
  const { breed } = router.query;

  useEffect(() => {
    // console.log(currentBreed);
    if (!breed) return;
    const currentBreed: Breed = JSON.parse(breed as string) as Breed;
    setCurrentBreed(currentBreed);
    const temp: catImage[] = [];
    const fetchData = async () => {
      const result = await axios(
        `https://api.thecatapi.com/v1/images/search?&limit=10&breed_ids=${currentBreed.id}`
      );
      console.log(result.data);
      result.data.forEach((element: catImage) => {
        temp.push(element);
      });
      setCatImages(temp);
    };
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex h-full w-full flex-col px-8 md:px-12 lg:mx-auto lg:max-w-7xl lg:px-16 uw:max-w-[90rem]">
      <div className="flex w-full flex-col justify-between lg:flex-row">
        <div className="lgg:h-[35rem] lgg:w-[35rem] relative mx-auto flex aspect-square h-44 w-44 rounded-[2.5rem] bg-transparent md:mx-0 md:h-[22rem] md:w-[22rem]">
          <div className="lgg:top-14 lgg:h-[28rem] lgg:w-[28rem] absolute top-4 z-0 h-36 w-36 rounded-[2.5rem] bg-[#DEC68B] md:top-8 md:h-[18rem] md:w-[18rem]"></div>
          <img
            className="lgg:h-[35rem] lgg:w-[35rem] absolute left-4 z-10 aspect-square h-44 w-44 rounded-[2.5rem] object-cover md:h-[22rem] md:w-[22rem]"
            src={catImages[0]?.url}
            alt="cat"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4 pb-4 md:mt-12 lg:pl-20">
          <h1 className="text-2xl font-bold text-brownn md:text-3xl lg:text-4xl uw:text-5xl">
            {currentBreed?.name}
          </h1>
          <p className="mt-2 text-justify text-sm md:text-base lg:text-lg uw:text-xl">
            {currentBreed?.description}
          </p>
          <div className="pr-5 font-bold text-black md:flex">
            Temperament:
            <div className="font-medium md:ml-2 md:w-full">
              {currentBreed?.temperament}
            </div>
          </div>
          <div className=" flex pr-5 font-bold text-black">
            Origin:
            <div className="ml-2 font-medium">{currentBreed?.origin}</div>
          </div>
          <div className=" flex pr-5 font-bold text-black">
            Life span:
            <div className="ml-2 font-medium">
              {currentBreed?.life_span} years
            </div>
          </div>
          <div className=" items-center md:flex">
            <p className="pr-5 font-bold text-black">Adaptability: </p>
            <TheComponent level={currentBreed?.adaptability} />
          </div>
          <div className=" items-center md:flex">
            <p className="pr-5 font-bold text-black">Affection level: </p>
            <TheComponent level={currentBreed?.affection_level} />
          </div>
          <div className=" items-center md:flex">
            <p className="pr-5 font-bold text-black">Child friendly: </p>
            <TheComponent level={currentBreed?.child_friendly} />
          </div>
          <div className="items-center md:flex">
            <p className="pr-5 font-bold text-black">Grooming: </p>
            <TheComponent level={currentBreed?.grooming} />
          </div>
          <div className="items-center md:flex">
            <p className="pr-5 font-bold text-black">Intelligence: </p>
            <TheComponent level={currentBreed?.intelligence} />
          </div>
          <div className="items-center md:flex">
            <p className="pr-5 font-bold text-black">Health issues: </p>
            <TheComponent level={currentBreed?.health_issues} />
          </div>
          <div className="items-center md:flex">
            <p className="pr-5 font-bold text-black">Social needs: </p>
            <TheComponent level={currentBreed?.social_needs} />
          </div>
          <div className="items-center md:flex">
            <p className="pr-5 font-bold text-black">Stranger Friendly</p>
            <TheComponent level={currentBreed?.stranger_friendly} />
          </div>
        </div>
      </div>

      <div className="py-4 text-2xl font-bold text-brownn md:text-3xl lg:text-4xl">
        Other Photos
      </div>
      <div className="mx-auto grid w-fit grid-cols-4 place-items-center gap-4 pb-4">
        {catImages.map((image, idx) => {
          // ignore the first image
          if (idx === 1 || idx > 8) return null;
          return (
            <img
              className="aspect-square w-44 rounded-lg object-cover"
              key={image.id}
              src={image.url}
              alt={image.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Cat;
