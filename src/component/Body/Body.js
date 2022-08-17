import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Slider from "react-slick";
import data from "../../picture.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Filter from "../Filter/Filter";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Body({ resultSearch }) {
  const [dataMapping, setDataMapping] = useState([]);

  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    setDataMapping(
      data.pictureList.filter((index) => {
        if (resultSearch === "") {
          return index;
        } else if (
          index.title
            .toLocaleLowerCase()
            .includes(resultSearch.toLocaleLowerCase())
        ) {
          return index;
        }
      })
    );
  }, [resultSearch]);

  return (
    <div className="mt-20 md:mt-32 mx-5 md:mx-10 mb-32">
      <Filter />
      <div className="w-full">
        <Slider {...settings}>
          {dataMapping.map((index) => {
            return <Card key={index.idPicture} pictureData={index} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Body;
