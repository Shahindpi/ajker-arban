import React from 'react'
import DatePicker from '../common/date_picker/DatePicker'
// import defaultImage from '../../assets/images/default-image.jpg';
import img1 from './../../assets/images/news5.jpg';
import img2 from './../../assets/images/news4.jpg';
import img3 from './../../assets/images/news2.jpg';
import img4 from './../../assets/images/latest1.jpg';
import img5 from './../../assets/images/latest2.jpg';

const DoubleFeature = (props) => {
    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">
                {props.headline}
            </div>
            <div className="category-wrapper__content cat-double-feature">
                <div className="single-column">
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img1} /></a></div>
                        <DatePicker />
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                        <div className="single-news__description">বিশ্বজুড়ে করোনাভাইরাসে আক্রান্তের সংখ্যা ৭ কোটি ৪৮ লাখ ছাড়িয়েছে। আর মৃতের সংখ্যা ১৬ লাখ ৬০ ...</div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img2} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img3} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img4} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                </div>
                <div className="single-column">
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img5} /></a></div>
                        <DatePicker />
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                        <div className="single-news__description">বিশ্বজুড়ে করোনাভাইরাসে আক্রান্তের সংখ্যা ৭ কোটি ৪৮ লাখ ছাড়িয়েছে। আর মৃতের সংখ্যা ১৬ লাখ ৬০ ...</div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img1} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img2} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img3} /></a></div>
                        <div className="single-news__title"><a href="">বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoubleFeature;