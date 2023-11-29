import React from 'react';
import { Link } from 'react-router-dom';
// import news_img from '../../assets/images/news-img1.jpg';
import stroller from '../../assets/images/ads/stroller2.gif';
import sidebar_ads1 from '../../assets/images/ads/thumb.gif';
import Navbar from '../common/header/navbar/Navbar';
import Footer from '../common/footer/Footer';
import DoubleFeature from '../home_category/DoubleFeature';
import ThumbnailList from '../home_category/Thumbnail';
import FilterTab from '../home_sidebar/FilterTab';
import { GoChevronRight } from "react-icons/go";



export default function Bangladesh(){
    return(
        <div className='page-wrapper main-wrapper'>
            <Navbar />
            <div className='custom-row'>
                <div className='breadcrumb'>
                    <ul>
                        <li><Link to="/">প্রচ্ছদ <span><GoChevronRight /></span></Link></li>
                        <li><Link to="/bangladesh">বাংলাদেশ</Link></li>
                    </ul>
                </div>
                <div className='page-details page-list'>
                    <div className='news-details category-section'>
                        <div className='page-list__featureNews flex-box category-section__content'>
                            <DoubleFeature headline="বাংলাদেশ" />
                            <div className='page-list__featureNews--col'>
                                
                            </div>
                            <ThumbnailList headline="বাংলাদেশর সকল খবর" />
                        </div>
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
    )
}