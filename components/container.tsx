import axios from "axios";
import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/CatwikiLogo.svg";
import SearchBar from "../searchBar/searchBar.component";
import "./container.styles.scss";
import Footer from "../footer/footer.component";
import { useNavigate } from "react-router-dom";

var breedList = [];
axios.get("https://catwikiserver.herokuapp.com/").then((res) => {
  breedList = res.data;
});

const Container = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCats, setFilteredCats] = useState(breedList);
  const navigate = useNavigate();

  useEffect(() => {
    var filteredCatss = breedList.filter((catt) => {
      return catt.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCats(filteredCatss);
  }, [search]);

  return (
    <div className="container">
      <div className="content">
        <div className="content-left">
          <div className="logotext">
            <Logo className="logo" />
            <div className="textunderlogo">
              <span>Get to know more about your cat breed</span>
            </div>
          </div>
          <SearchBar setSearch={setSearch} setIsOpen={setIsOpen} />
          <div className={`search-suggestions ${isOpen ? "blockbox" : ""}`}>
            <div className="search-results">
              {search === ""
                ? breedList.map((cat) => {
                    return (
                      <div
                        className="suggestion"
                        key={cat.id}
                        onClick={() => {
                          navigate(`cat/${cat.id}`, { state: cat });
                        }}
                      >
                        {cat.name}
                      </div>
                    );
                  })
                : filteredCats.map((breed) => (
                    <span
                      className="suggestion"
                      key={breed.id}
                      onClick={() => {
                        navigate(`cat/${breed.id}`, { state: breed });
                      }}
                    >
                      {breed.name}
                    </span>
                  ))}
            </div>
          </div>
        </div>
        <div className="content-right">
          <img className="bgcat" src="/HeroImagelg.png" alt="cat" />
        </div>
        <div className="content-bottom">
          <div className="textside">
            <span className="smalltext">Most searched Breeds</span>
            <div className="brownline"></div>
            <div className="separate">
              <h1 className="bigtext">66+ Breeds For you to discover</h1>
              <span
                className="seemore pointer"
                onClick={() => {
                  navigate("/mostSearched", { state: breedList });
                }}
              >
                SEE MORE &#8594;
              </span>
            </div>
          </div>
          <div className="image-container">
            <div>
              <img
                className="square"
                src="https://cdn2.thecatapi.com/images/ZocD-pQxd.jpg"
                alt="bengal"
              />
              <p>Bengal</p>
            </div>
            <div>
              <img
                className="square"
                src="https://images.unsplash.com/photo-1610034793880-4f6f82c35d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2F2YW5uYWglMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="savannah"
              />
              <p>Savannah</p>
            </div>
            <div>
              <img
                className="square"
                src="https://images.unsplash.com/photo-1556799483-e642a45aeb68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5vcndlZ2lhbiUyMGZvcmVzdCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="norwegian forest cat"
              />
              <p>Norwegian Forest Cat</p>
            </div>
            <div>
              <img
                className="square"
                src="https://marvel-b1-cdn.bc0a.com/f00000000052994/www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/images/selkirk-rex-on-brown-background.jpg"
                alt="selkirk rex"
              />
              <p>Selkirk Rex</p>
            </div>
          </div>
        </div>
      </div>
      <div className="masonry-content">
        <div className="masonry-content-left">
          <div style={{ marginTop: "100px" }}>
            <div className="brownline"></div>
            <h1 className="bigtext">Why should you have a cat?</h1>
          </div>
          <span className="smalltext">
            Having a cat around you can actually trigger the release
            <br /> of calming chemicals in your body which
            <br /> lower your stress and anxiety leves
          </span>
          <span style={{ marginBottom: "20px" }} className="seemore">
            <a
              className="seemore"
              href="https://animalkind.org/blog/top-5-reasons-cat/"
            >
              READ MORE &#8594;
            </a>
          </span>
        </div>
        <div className="masonry-content-right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <img id="image2" src="/image 2.png" alt="cat2" />
            <img
              style={{ marginTop: "30px" }}
              id="image1"
              src="/image 1.png"
              alt="cat1"
            />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <img id="image3" src="/image 3.png" alt="cat3" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
