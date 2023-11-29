import React from 'react';
import { Link } from 'react-router-dom';
import news_img from '../../assets/images/news-img1.jpg';
import stroller from '../../assets/images/ads/stroller2.gif';
import sidebar_ads1 from '../../assets/images/ads/thumb.gif';
import Navbar from '../common/header/navbar/Navbar';
import Footer from '../common/footer/Footer';
import FilterTab from '../home_sidebar/FilterTab';
import SlickCarousel from '../common/carousel/Carousel';
import { GoChevronRight } from "react-icons/go";

function Detials() {
    return (
        <div className='page-wrapper main-wrapper'>
            <Navbar />
            <div className='custom-row'>
            <div className='breadcrumb'>
                    <ul>
                        <li><Link to="/">প্রচ্ছদ <span><GoChevronRight /></span></Link></li>
                        <li><Link to="/#">আইন ও মানবাধিকার <span><GoChevronRight /></span></Link></li>
                        <li><Link to="/#">শীর্ষ সংবাদ</Link></li>
                    </ul>
                </div>
                <div className='page-details'>
                    <div className='news-details'>
                        <div className='news-details__title'>
                            এমবাপ্পেদের পেরোবে আর্জেন্টিনা, তবে থাকছে ব্রাজিলের পেছনেই
                        </div>
                        <div className='news-details__published-by'>
                            <ul>
                                <li>নেত্রকোনা প্রতিনিধি</li>
                                <li>প্রকাশ: ১৬ জুন ২০২২</li>
                            </ul>
                            <ul>
                                <li>Views 20</li>
                                <li>Liked 3</li>
                            </ul>
                        </div>
                        <div className='news-details__img'>
                            <img src={news_img} alt="Related info" />
                            <div className='news-details__img--caption'>
                                <p>নেইমারদের ধরার সুযোগ আপাতত হচ্ছে না মেসির আর্জেন্টিনার <span>ছবি: রয়টার্স </span></p>
                            </div>
                        </div>
                        <div className='news-details__social'>

                        </div>
                        <div className='news-details__text'>
                        বেশ ভালো একটা সময়ই কাটছে আর্জেন্টিনার। কোপা আমেরিকার ১১ মাসের মধ্যে আন্তঃমহাদেশীয় শ্রেষ্ঠত্বসূচক শিরোপা লা ফিনালিসিমা জিতেছেন লিওনেল মেসিরা, টানা ৩৩ ম্যাচ অপরাজিত আলবিসেলেস্তেরা। এমন দারুণ সময়ের প্রভাব র‍্যাঙ্কিংয়ে না পড়ে পারে? 

ফিফার নতুন র‍্যাঙ্কিং এখনো প্রকাশিত হয়নি, তবে সেখানে আর্জেন্টিনার অবস্থান কী হতে পারে, সেটি জানিয়ে দিয়েছে আর্জেন্টাইন সংবাদমাধ্যম টিওয়াইসি স্পোর্টস। তাদের হিসাবে, এর পরের র‍্যাঙ্কিংয়ে কিলিয়ান এমবাপ্পে, করিম বেনজেমার ফ্রান্সকে টপকে সেরা তিনে উঠে আসবে লিওনেল স্কালোনির দল। তবে ব্রাজিল ভক্তদের এখনই আর্জেন্টিনাকে নিয়ে শঙ্কার কিছু নেই, ব্রাজিল শীর্ষেই থাকছে। 
                        </div>
                        <SlickCarousel />
                        {/* Ads section */}
                        <div className='details-ads'>
                            <img src={stroller} alt="Stroller ads" />
                        </div>
                    </div>
                    <div className='page-sidebar'>
                        <div className="sidebar-ads">
                            <Link to=""><img src={sidebar_ads1} alt="Thums ads" /> </Link>
                        </div>
                        <FilterTab />
                        <div className='sidebar-videos'>
                            <iframe width="683" height="384" src="https://www.youtube.com/embed/EpLX09EwhcY" title="10 Creative Commercial Ad 2022।" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }

export default Detials;