import React, { useState, useEffect } from "react";
import axios from "axios";
import TheComponent from "../components/thecomponent";
import { useRouter } from "next/router";

const CatPage = () => {
  const [cat, setCat] = useState([]);
  const router = useRouter();

  const data = router.query;
  // const catImage = router.query.catImage;

  // get 8 cat image url of the same id from the api and set them to the state

  useEffect(() => {
    const temp = [];
    const fetchData = async () => {
      const result = await axios(
        `https://api.thecatapi.com/v1/images/search?&limit=8&breed_ids=${data.id}`
      );
      result.data.forEach((element) => {
        temp.push(element.url);
      });
      setCat(temp);
    };
    fetchData();
  }, []);
  // console.log(cat);

  return (
    <div className="p-2 mx-auto">
      <div className=" flex flex-col md:flex-row justify-between items-start rounded-3xl">
        <div className="h-full">
          <img
            loading="lazy"
            className="h-32 w-auto md:h-72 md:w-96 rounded-3xl"
            src={cat[0]}
            alt="catimage"
          />
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-3xl md:text-4xl text-[#291507] mb-4">
            {data.name}
          </h2>
          <div className="font-medium text-sm md:text-lg leading-[22px] text-[#291507] w-[275px] md:w-[601px]">
            {data.description}
          </div>
          <div className="md:flex font-bold pr-5 text-black my-4">
            Temperament:
            <div className="w-12 md:w-full md:ml-2">{data.temperament}</div>
          </div>
          <div className="md:flex font-bold pr-5 text-black my-4">
            Origin: <div className="md:ml-2">{data.origin}</div>
          </div>
          <div className="md:flex font-bold pr-5 text-black my-4">
            Life span:
            <div className="md:ml-2">{data.life_span} years</div>
          </div>
          <div className="md:flex  items-center my-4">
            <p className="font-bold pr-5 text-black">Adaptability: </p>
            <TheComponent level={data.adaptability} />
          </div>
          <div className="md:flex items-center my-4">
            <p className="font-bold pr-5 text-black">Affection level: </p>
            <TheComponent level={data.affection_level} />
          </div>
          <div className="md:flex  items-center my-8">
            <p className="font-bold pr-5 text-black">Child friendly: </p>
            <TheComponent level={data.child_friendly} />
          </div>
          <div className="md:flex items-center my-8">
            <p className="font-bold pr-5 text-black">Grooming: </p>
            <TheComponent level={data.grooming} />
          </div>
          <div className="md:flex items-center my-8">
            <p className="font-bold pr-5 text-black">Intelligence: </p>
            <TheComponent level={data.intelligence} />
          </div>
          <div className="md:flex items-center my-8">
            <p className="font-bold pr-5 text-black">Health issues: </p>
            <TheComponent level={data.health_issues} />
          </div>
          <div className="md:flex items-center my-8">
            <p className="font-bold pr-5 text-black">Social needs: </p>
            <TheComponent level={data.social_needs} />
          </div>
          <div className="md:flex items-center my-8">
            <p className="font-bold pr-5 text-black">Stranger Friendly</p>
            <TheComponent level={data.stranger_friendly} />
          </div>
        </div>
      </div>
      <div className="w-full rounded-3xl mx-auto">
        <p className="font-semibold text-4xl leading-[44px] text-[#291507] m-2 p-2">
          Other Photos
        </p>
        <div className="w-3/4 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 rounded-3xl mb-2 ml-8 md:w-full">
          {cat.map((element, index) => {
            return (
              <div key={index++}>
                <img
                  className="rounded-3xl w-28 h-28 md:w-64 md:h-64"
                  src={element}
                  alt="cat"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CatPage;
