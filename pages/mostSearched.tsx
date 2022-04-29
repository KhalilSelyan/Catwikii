import axios from "axios";
import Image from "next/image";
import React from "react";

let top10 = [
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
  let [mostSearchedCats, setMostSearchedCats] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://catwikiserver.herokuapp.com`);

      let temp = [];
      for (let i = 0; i < 10; i++) {
        result.data.forEach((cat) => {
          if (cat.id === top10[i]) {
            temp.push(cat);
          }
        });
      }
      setMostSearchedCats(temp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl ml-96 mb-4 underline underline-offset-2">
          Top 10 Most Searched Breeds
        </h1>
        <div className="flex flex-col justify-center">
          {mostSearchedCats?.map((cat, index) => {
            return (
              <div
                className="flex flex-row justify-center py-3 my-3 w-full h-full"
                key={cat.id}
              >
                <Image
                  className="rounded-3xl"
                  src={cat.image.url}
                  alt={cat.name}
                  width={176}
                  height={176}
                />
                <div
                  className={"flex flex-col justify-start text-[#291507] ml-12"}
                >
                  <div className="font-semibold text-4xl h-11">
                    {index + 1}. {cat.name}
                  </div>
                  <div className="text-lg h-16 w-[888px] font-medium">
                    {cat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MostSearched;
