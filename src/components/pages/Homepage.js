
import NewsScroller from './../scroller/NewsScroller';
import FeatureNews from './../feature_news/FeatureNews';
// import HomeSlider from '../components/home_category/Carousel';
import SingleFeature from './../home_category/SingleFeature';
import DoubleFeature from './../home_category/DoubleFeature';
import ThumbnailList from './../home_category/Thumbnail';
import Navbar from './../common/header/navbar/Navbar';
import Sidebar from './../home_sidebar/Sidebar'
import Footer from './../common/footer/Footer';
import Advertise from './../../components/common/advertise/Advertise';
import AdsImage from './../../assets/images/ads/48_HPK_T6768_HP-LJ400_01_2000x180.gif';
import AdsImageMobile from './../../assets/images/ads/48_HPK_T6768_HP-LJ400_01_640x100.gif';
import AdsHorizontal_M from './../../assets/images/ads/48_HPK_T6768_HP-LJ400_01_640x100.gif';
// import AdsHorizontal_Static from './../../src/assets/images/ads/43XX_BIAX_1HPGMIAA1_970x250_US_ENG_01.jpg';
import AdsHorizontal_Static from './../../assets/images/ads/43XX_BIAX_1HPGMIAA1_970x250_US_ENG_01.jpg';
import RootLayout from '../../layouts/RootLayout';

function Homepage(){
    return(
        <div className="main-wrapper">
            <Navbar />
            <div className="custom-row mobile-hide top-ads"><Advertise ads={AdsImage} /></div>
            <div className="custom-row desktop-hide top-ads"><Advertise ads={AdsImageMobile} /></div>
            <NewsScroller />
            <FeatureNews />

            {/* Homepage Categories */}
            <div className="category-section">
                    <div className="category-section__content custom-row">

                    {/* Main Content */}
                    <div className="category-section__content--column">
                        {/* <SingleFeature 
                            headline="করোনা পরিস্থিতি"
                            SingleFeatureImg={defaultImage}
                            SingleFeatureTitle="বিশ্বে করোনায় মৃত্যু ১৬ লাখ ৬০ হাজার ছাড়িয়েছে"
                            SingleFeatureDescription="বিশ্বজুড়ে করোনাভাইরাসে আক্রান্তের সংখ্যা ৭ কোটি ৪৮ লাখ ছাড়িয়েছে। আর মৃতের সংখ্যা ১৬ লাখ ৬০ ..."
                        /> */}
                        <SingleFeature headline="আন্তর্জাতিক" />
                        <DoubleFeature headline="বাংলাদেশ" />
                        <div style={{paddingBottom:'20px'}}><Advertise ads={AdsHorizontal_M} /></div>
                        {/* <HomeSlider /> */}
                        <SingleFeature headline="আন্তর্জাতিক" />
                        <ThumbnailList headline="রাজনীতি" />
                        <div style={{paddingBottom:'20px'}}><Advertise ads={AdsHorizontal_Static} /></div>
                        <SingleFeature headline="আইন ও মানবাধিকার" />
                        <div style={{paddingBottom:'20px'}}><Advertise ads={AdsHorizontal_M} /></div>
                    </div>

                    {/* Sidebar Content */}
                    <div className="category-section__content--column">
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;