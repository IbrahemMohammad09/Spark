import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./ViewProject.css";
import image1 from "../../images/ViewProject/image1.jpg";
import image2 from "../../images/ViewProject/image2.jpg";
import image3 from "../../images/ViewProject/image3.jpg";
import image4 from "../../images/ViewProject/image4.jpg";
import image5 from "../../images/ViewProject/image5.jpg";
import image6 from "../../images/ViewProject/image6.jpg";
import image7 from "../../images/ViewProject/image7.jpg";
const carouselItems = [
  {
    img: image1,
    title: "Drop-in audio chat 1",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com1",
  },
  {
    img: image2,
    title: "Drop-in audio chat 2",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com2",
  },
  {
    img: image3,
    title: "Drop-in audio chat 3",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com3",
  },
  {
    img: image4,
    title: "Drop-in audio chat 4",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com4",
  },
  {
    img: image5,
    title: "Drop-in audio chat 5",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com5",
  },
  {
    img: image6,
    title: "Drop-in audio chat 6",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com6",
  },
  {
    img: image7,
    title: "Drop-in audio chat 7",
    description:
      "Spark is a software engineering company that specializes in developing cutting-edge solutions for various domains. We have a team of talented and passionate engineers who are always ready to take on new challenges and deliver high-quality products. Whether ",
    link: "https://MRR.com7",
  },
];

const ViewProject = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log("carousel Items", carouselItems);
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      controls={false}
      indicators={false}
    >
      {carouselItems.map((item, i) => (
        <Carousel.Item key={i} className="text-left custom-carousel-item">
          <img
            className="d-block object-fit-cover w-100 img-fit"
            src={item.img}
            alt={`Slide ${i}`}
          />
          <Carousel.Caption>
            <div className="text-view">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>{item.link}</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      <div className="carousel-thumbnails">
        <>
          {carouselItems.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb.img}
              alt={`Thumb ${idx}`}
              className={`thumbnail ${idx === index ? "active" : ""}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </>
      </div>
    </Carousel>
  );
};

export default ViewProject;
