import React, { useState, useEffect } from "react";
import "./Home.css";
import Carousel from "../../Components/Carousel/Carousel";
import CarouselTray from "../../Components/CarouselTray/CarouselTray";

function Home(props) {
  const [data, setData] = useState([]);
  var url = `https://api.themoviedb.org/3/trending/all/day?api_key=${props.apikey}`;
  var imgurl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const getData = async (req, res) => {
      await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data.results);
        });
    };
    getData();
  }, []);

  var cards = data.results;

  return (
    <>
      {/* <div>Home {props.apikey}{url}</div> */}
      <Carousel  />
      
      <CarouselTray title="Trending Now" data={cards} />
      {/* <div className="con"> {JSON.stringify(data)}</div> */}
    </>
  );
}

export default Home;
