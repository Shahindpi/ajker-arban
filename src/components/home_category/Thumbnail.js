import React from 'react';
import DatePicker from '../common/date_picker/DatePicker'
// import defaultImage from '../../assets/images/default-image.jpg';
// // import defaultImage from '../../assets/images/default-image.jpg';
import img1 from './../../assets/images/latest3.jpg';
import img2 from './../../assets/images/news4.jpg';
import img3 from './../../assets/images/news2.jpg';
import img4 from './../../assets/images/latest5.jpg';
import img5 from './../../assets/images/latest4.jpg';


const ThumbnailList = (props) => {
    return(
        <div className="category-wrapper">
            <div className="category-section__content--headline">
                {props.headline}
            </div>
            <div className="category-wrapper__content cat-thumbnail">
                <div className="single-column">
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img1} /></a></div>
                       <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img2} /></a></div>
                        <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img3} /></a></div>
                        <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img5} /></a></div>
                        <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img4} /></a></div>
                        <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                    <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img3} /></a></div>
                        <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailList;