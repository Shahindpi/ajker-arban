import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureInternational = ({featureNews}) => {

    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter features for 'International' category
    const FeatureInternational = descendingItems.filter(feature =>
        feature.category.some(cat => cat.name === 'international')
    );
    
    // Get the latest feature for 'International'
    const latestFeatureInternational = FeatureInternational.length > 0 ? FeatureInternational[0] : null;
    

    // Filter restOfFeatures for 'International' category
    const allFeaturesInternational = descendingItems
    .filter(feature => feature.category.some(cat => cat.name === 'international')).slice(1, 5);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">আন্তর্জাতিক</div>
            <div className="category-wrapper__content single-feature">
                <div className="single-column">
                    {latestFeatureInternational && (
                        <div className="single-news" key={latestFeatureInternational.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeatureInternational.id}`}><img src={latestFeatureInternational.img} al={latestFeatureInternational.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeatureInternational.id}`}>{latestFeatureInternational.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${latestFeatureInternational.id}`}>{latestFeatureInternational.descriptions.slice(0, 150)}</Link></div>
                        </div>
                    )}
                </div>
                <div className="single-column">
                    {allFeaturesInternational.map((feature) => (
                        <div className="single-news" key={feature.id}>
                            <div className="single-news__image"><Link to={`/previews/${feature.id}`}><img src={feature.img} alt={feature.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${feature.id}`}>{feature.title}</Link></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureInternational;