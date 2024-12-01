import React from "react";
import "./Slider.css"; // Đảm bảo bạn import file CSS ở đây
import Header from "../Header/Header";

const Slider = () => {
  const sliderRef = React.useRef(null);

  const activate = (e) => {
    const items = sliderRef.current.querySelectorAll(".item");
    if (e.target.classList.contains("next")) {
      sliderRef.current.append(items[0]);
    } else if (e.target.classList.contains("prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="slider-container">
      <Header />
      <ul className="slider" ref={sliderRef}>
        {[
          {
            title: "Lossless Youths",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
          },
          {
            title: "Estrange Bond",
            description: "Lorem ipsum dolor sit amet...",
            image: "https://i.redd.it/tc0aqpv92pn21.jpg",
          },
          {
            title: "The Gate Keeper",
            description: "Lorem ipsum dolor sit amet...",
            image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
          },
          {
            title: "Last Trace Of Us",
            description: "Lorem ipsum dolor sit amet...",
            image: "https://images7.alphacoders.com/878/878663.jpg",
          },
          {
            title: "Urban Decay",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
          },
          {
            title: "The Migration",
            description: "Lorem ipsum dolor sit amet...",
            image: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
          },
        ].map((slide, index) => (
          <li
            className="item"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={activate}>
          ❮
        </button>
        <button className="btn next" onClick={activate}>
          ❯
        </button>
      </nav>
    </div>
  );
};

export default Slider;
