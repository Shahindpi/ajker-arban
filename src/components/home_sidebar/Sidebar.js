// import 'bootstrap/dist/css/bootstrap.min.css';
import ThumbnailList from './../home_category/Thumbnail';
import SingleFeature from './../home_category/SingleFeature';
// import DoubleFeature from './../home_category/DoubleFeature';
import Advertise from './../common/advertise/Advertise';
import AdsImage from './../../assets/images/ads/48_HPK_T6768_HP-LJ400_01_160x400.gif';
// import AdsSmall from './../../assets/images/ads/43XX_BIAX_1HPGMIAA1_300x250_US_ENG_01.jpg';
import FilterTab from './FilterTab';

const Sidebar = () => {
    return(
        <div className="sidebar-coentent">
            <div className='page-sidebar'>
                <FilterTab />
                <div className='sidebar-videos'>
                    <iframe width="683" height="280" src="https://www.youtube.com/embed/EpLX09EwhcY" title="10 Creative Commercial Ad 2022।" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                
            </div>
            <Advertise ads={AdsImage} />
            <ThumbnailList headline="জীবনযাপন" />
            <SingleFeature headline="অর্থনীতি" />
            {/* <Advertise ads={AdsSmall} /> */}
            {/* <DoubleFeature headline="বিজ্ঞান ও প্রযুক্তি" /> */}
        </div>
    );
}

export default Sidebar;