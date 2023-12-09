
import React from "react"
import { useState } from "react"
import { Image } from "antd"
import Slider from "react-slick"
import TestimonialData from "./TestimonialData"
import { useSize } from "Commonitem/WindowSize"


// import star5 from "../../assets/images/star5.svg"
// import previous from "../../assets/images/previous.svg"
// import next from "../../assets/images/next.svg"
import { LeftOutlined , RightOutlined } from '@ant-design/icons';

function AdvertiesmentCaresol() {
  const [divIndex, setDivIndex] = useState(0)
  const { innerWidth } = useSize()
 
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <Image src={next} alt="" /> */}
        <LeftOutlined />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {/* <Image src={previous} alt="" /> */}
        <RightOutlined />
      </div>
    )
  }

  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    centerPadding: 0,
    slidesToShow: 3,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // beforeChange: (current, next) => setImageIndex(next),
    beforeChange: (current, next) => setDivIndex(next),
  }

  let settingsMid = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    centerPadding: 0,
    slidesToShow: 2,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setDivIndex(next),
  }
  let settingsRes = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    centerMargin: 30,
    beforeChange: (current, next) => setDivIndex(next),
  }

  const chooseSetting = () => {
    if (innerWidth > 1000) {
      return settings
    } else if (innerWidth > 768) {
      return settingsMid
    } else {
      return settingsRes
    }
  }

  // const customIcons = {
  //   1: <Image src={star5} alt="" />,
  //   2: <Image src={star5} alt="" />,
  //   3: <Image src={star5} alt="" />,
  //   4: <Image src={star5} alt="" />,
  //   5: <Image src={star5} alt="" />,
  // }
  return (
    <div style={{ overflow: "hidden" }} className="gradient-card">
      {/* <div>
        <h1 className="j-c">What do our students say?</h1>
      </div> */}
      <div className="imageSlider__contain " style={{marginTop:"20px"}}>
        <Slider {...chooseSetting()}>
          {TestimonialData.map((testimonials, idx) => (
            <div
              className={
                idx === divIndex
                  ? "card-wrapper activeCardWrapper"
                  : "card-wrapper"
              }
              key={testimonials.key}
            >
              <div className="card" style={{ borderRadius: "15px" }}>
                <div
                  className="testimonial"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div style={{}}>
                    <div className="j-c">
                      {/* <Image
                        alt="Avatar"
                        src={testimonials.image.imageTutor}
                       
                      /> */}
                      {testimonials?.image}
                    </div>

                    {/* <div>
                      <Rate
                        defaultValue={5}
                        character={({ index }) => customIcons[index + 1]}
                      />
                    </div> */}

                    <div>
                      <blockquote> {testimonials?.blockquote}</blockquote>
                    </div>

                    <div>
                      <h3 style={{ color: "white" }}>{testimonials.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default AdvertiesmentCaresol