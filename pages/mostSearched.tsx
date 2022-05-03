import axios from "axios";
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
    <div className="p-2">
      <div>
        <h1 className="flex md:justify-center font-bold text-4xl mb-4 underline underline-offset-2 md:w-4/5">
          Top 10 Most Searched Breeds
        </h1>
        <div className="flex flex-col justify-center py-2 px-4">
          {mostSearchedCats?.map((cat, index) => {
            return (
              <div
                className="flex flex-col md:flex-row md:justify-center py-3 mt-3 "
                key={cat.id}
              >
                <img
                  className="rounded-3xl md:w-44 md:h-44"
                  src={cat.image.url}
                  alt={cat.name}
                />
                <div
                  className={
                    "flex flex-col justify-start text-[#291507] mt-4 md:mt-0  md:ml-12"
                  }
                >
                  <div className="font-semibold text-4xl md:h-11">
                    {index + 1}. {cat.name}
                  </div>
                  <div className="text-lg mt-3 md:mt-2 md:h-16 md:w-[888px] font-medium">
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
