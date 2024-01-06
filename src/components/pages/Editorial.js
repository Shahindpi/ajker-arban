import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import stroller from '../../assets/images/ads/stroller2.gif';
import sidebar_ads1 from '../../assets/images/ads/thumb.gif';
import Navbar from '../common/header/navbar/Navbar';
import Footer from '../common/footer/Footer';
import FilterTab from '../home_sidebar/FilterTab';
import { GoChevronRight } from "react-icons/go";
import ListJob from './list/ListJob';
import ListEditorial from './list/ListEditorial';



export default function Editorial(){

    
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the route changes
    }, [location]);
    
    return(
        <div className='page-wrapper main-wrapper'>
            <Navbar />
            <div className='custom-row'>
                <div className='breadcrumb'>
                    <ul>
                        <li><Link to="/">প্রচ্ছদ <span><GoChevronRight /></span></Link></li>
                        <li><Link to="/editorial">সম্পাদকীয়</Link></li>
                    </ul>
                </div>
                <div className='page-details page-list'>
                    <div className='news-details category-section'>
                        <div className='page-list__featureNews flex-box category-section__content'>
                            <ListEditorial pageName="সম্পাদকীয়" />
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