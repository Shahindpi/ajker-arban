import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureLifestyle = ({featureNews}) => {


    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter restOfFeatures for 'culture' category
    const listLifestyle = descendingItems
    .filter(descendingItems => descendingItems.category.some(cat => cat.name === 'lifestyles')).slice(0, 6);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">জীবনযাপন </div>
            <div className="category-wrapper__content cat-thumbnail">
                <div className="single-column">
                    {listLifestyle.map((lifestyle) => (
                        <div className="single-news" key={lifestyle.id}>
                            <div className="single-news__image"><Link to={`/previews/${lifestyle.id}`}><img src={lifestyle.img} alt={lifestyle.alt} /></Link></div>
                            <div className="text-wrapper">
                                <div className="single-news__title"><Link to={`/previews/${lifestyle.id}`}>{lifestyle.title}</Link></div>
                                <div className="single-news__description"><Link to={`/previews/${lifestyle.id}`}>{lifestyle.descriptions.slice(0, 100)}</Link></div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="single-news">
                        <div className="single-news__image"><a href=""><img src={img1} /></a></div>
                       <div className="text-wrapper">
                            <div className="single-news__title"><a href="">ভাস্কর্য ইস্যুতে পেছন থেকে বিএনপি মদদ দিচ্ছে : কাদের</a></div>
                            <div className="single-news__description">আরবান ডেস্ক : ভাস্কর্য ইস্যুতে বিএনপি পেছন থেকে মদদ দিচ্ছে দাবি করে আওয়ামী লীগের সাধারণ সম্পাদক ওবায়দুল কাদের বলেছেন, ‘ভাস্কর্য ইস্যুতে বিএনপির...</div>
                       </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default FeatureLifestyle;