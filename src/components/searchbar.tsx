import React from "react";

const isWindow = typeof window !== "undefined";
const SearchBar = ({
  setSearch,
  setIsOpen,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [placeHolder, setPlaceHolder] = React.useState("Search");

  React.useEffect(() => {
    if (isWindow) {
      const innerWidth = window.innerWidth;
      if (innerWidth < 768) {
        setPlaceHolder("Search");
      } else {
        setPlaceHolder("Enter your breed");
      }
    }
  }, []);

  return (
    <div className="flex h-8 w-[5.5rem] items-center rounded-3xl border border-[#bdbdbdbd] bg-white px-2 md:h-12 md:w-60 md:px-4">
      <input
        className="h-full w-full border-none bg-transparent text-xs placeholder:text-xs placeholder:text-[#291507] focus:outline-none md:text-sm md:placeholder:text-sm"
        type="text"
        placeholder={placeHolder}
        onFocus={() => {
          setIsOpen(true);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <svg
        className="h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="#291507"
          d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
