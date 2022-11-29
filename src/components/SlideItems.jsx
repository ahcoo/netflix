import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import Slider from "react-slick";
import "../styles/SlideItems.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideVideo from "./SlideVideo";

const SlideItems = (openModal, kDramas) => {
  const [ranks, setRanks] = useState([]);
  const [dramas, setDramas] = useState([]);
  const [riseups, setRiseups] = useState([]);
  const [actionAnimes, setActionAnimes] = useState([]);
  const [populars, setPopulars] = useState([]);
  const [only, setOnly] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const ranks = await axios.get(`${BACKEND_URL}/contents?kw=RANK`);
      const dramas = await axios.get(`${BACKEND_URL}/contents?kw=DRAMA`);
      const riseups = await axios.get(`${BACKEND_URL}/contents?kw=RISE-UP`);
      const actionAnimes = await axios.get(
        `${BACKEND_URL}/contents?kw=ANI-ACT`
      );
      const populars = await axios.get(
        `${BACKEND_URL}/contents?kw=NETFLIX-POP`
      );
      const only = await axios.get(`${BACKEND_URL}/contents?kw=NETFLIX-ONLY`);

      setRanks(ranks.data);
      setDramas(dramas.data);
      setRiseups(riseups.data);
      setActionAnimes(actionAnimes.data);
      setPopulars(populars.data);
      setOnly(only.data);
    };
    getData();
  }, []);

  // Slick 세팅 시작
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", backgroundColor: "" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false, //carousel 밑에 지정 콘텐츠로 바로 이동할 수 있는 버튼을 뜻한다. flase 할시 사라진다.
    arrows: true,
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복한다.
    slidesToShow: 6, //한 화면에 보이는 콘텐츠 개수를 말한다.
    slidesToScroll: 6, //한 번에 넘어가는 콘텐츠 수이다. 2로 정하면 2개씩 넘어간다.
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // Slick 세팅 끝

  return (
    <div
      className="slide-body"
      style={{
        zIndex: "3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="ranking-slide-body">
        <div className="slide-container flex flex_jc_start">
          <a href="#">
            <div className="slide-title-text text-test">
              한국 드라마
              {/* <div className="slide-detail-hover"> */}
              <div className="slide-detail-text">모두 보기</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
              {/* </div> */}
            </div>
          </a>
        </div>
        <Slider {...settings}>
          {/* rank 1 */}
          {dramas.map((ele, index) => {
            return (
              <div className="thumbnail-container" key={index}>
                <div
                  className="real-container"
                  // onMouseEnter={() => {
                  //   console.log("호버됨");
                  //   document.getElementById(
                  //     "slide_video_box"
                  //   ).style.visibility = "visible";
                  // }}
                >
                  <img className="thumbnail-img" src={ele?.contentImg} alt="" />
                </div>
                <div className="slide_video_box" id="slide_video_box">
                  <SlideVideo openModal={openModal} ranking={dramas[0]} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="slide-container flex flex_jc_start">
        <a href="#">
          <div className="slide-title-text">
            지금 뜨는 콘텐츠
            <div className="slide-detail-hover">
              <div className="slide-detail-text">모두 보기</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
            </div>
          </div>
        </a>
      </div>

      <Slider {...settings}>
        {riseups.map((ele, index) => {
          return (
            <div className="thumbnail-container" key={index}>
              <a href="#" className="slider-refocus">
                <img className="thumbnail-img" src={ele?.contentImg} alt="" />
              </a>
            </div>
          );
        })}
      </Slider>

      <div className="slide-container flex flex_jc_start">
        <a href="#">
          <div className="slide-title-text">
            액션 애니
            <div className="slide-detail-hover">
              <div className="slide-detail-text">모두 보기</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
            </div>
          </div>
        </a>
      </div>

      <Slider {...settings}>
        {actionAnimes.map((ele, index) => {
          return (
            <div className="thumbnail-container" key={index}>
              <a href="#" className="slider-refocus">
                <img className="thumbnail-img" src={ele?.contentImg} alt="" />
              </a>
            </div>
          );
        })}
      </Slider>

      <div className="slide-container flex flex_jc_start">
        <a href="#">
          <div className="slide-title-text">
            넷플릭스 인기 콘텐츠
            <div className="slide-detail-hover">
              <div className="slide-detail-text">모두 보기</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
            </div>
          </div>
        </a>
      </div>

      <Slider {...settings}>
        {populars.map((ele, index) => {
          return (
            <div className="thumbnail-container" key={index}>
              <a href="#" className="slider-refocus">
                <img className="thumbnail-img" src={ele?.contentImg} alt="" />
              </a>
            </div>
          );
        })}
      </Slider>

      <div className="slide-container flex flex_jc_start">
        <a href="#">
          <div className="slide-title-text">
            오직 넷플릭스에서만
            <div className="slide-detail-hover">
              <div className="slide-detail-text">모두 보기</div>
              <img
                className="slide-arrow-img"
                src="https://img.icons8.com/metro/10/54b9c5/forward.png"
              />
            </div>
          </div>
        </a>
      </div>

      <Slider {...settings}>
        {only.map((ele, index) => {
          return (
            <div className="thumbnail-container" key={index}>
              <a href="#" className="slider-refocus">
                <img className="thumbnail-img" src={ele?.contentImg} alt="" />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideItems;