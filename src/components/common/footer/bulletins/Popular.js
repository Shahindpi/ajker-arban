import { Link } from "react-router-dom";
import latest1 from './../../../../assets/images/latest1.jpg';
import latest2 from './../../../../assets/images/latest2.jpg';


function Popular(){
    return(
        <div className="latest-bulletins-container">
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest2} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">পদ্মা সেতুর টোল প্লাজা, নদীর তীরের বাঁধ ঘুরে মুগ্ধ মানুষ</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest1} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">গুলিস্তানে বাস ও ট্রাকের ধাক্কায় ২ জনের মৃত্যু</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest2} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">পদ্মা সেতুর টোল প্লাজা, নদীর তীরের বাঁধ ঘুরে মুগ্ধ মানুষ</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest1} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">গুলিস্তানে বাস ও ট্রাকের ধাক্কায় ২ জনের মৃত্যু</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest2} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">পদ্মা সেতুর টোল প্লাজা, নদীর তীরের বাঁধ ঘুরে মুগ্ধ মানুষ</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest1} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">গুলিস্তানে বাস ও ট্রাকের ধাক্কায় ২ জনের মৃত্যু</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest2} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">পদ্মা সেতুর টোল প্লাজা, নদীর তীরের বাঁধ ঘুরে মুগ্ধ মানুষ</div>
                </Link>
            </div>
            <div className="latest-bulletins-container__single">
                <Link to="/">
                    <div className="latest-bulletins-container__single--img"><img src={latest1} alt="related alt" /></div>
                    <div className="latest-bulletins-container__single--title">গুলিস্তানে বাস ও ট্রাকের ধাক্কায় ২ জনের মৃত্যু</div>
                </Link>
            </div>
        </div>
    );
}

export default Popular;