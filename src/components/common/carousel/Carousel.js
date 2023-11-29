import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/default-image.jpg";

export default class SlickCarousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      nextArrow: <SlArrowRightCircle />,
      prevArrow: <SlArrowLeftCircle />
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
            <Link to="" className="single-item">
                <img src={defaultImage} alt="Default Image" />
                <h5>বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা</h5>
            </Link>
        </Slider>
      </div>
    );
  }
}

