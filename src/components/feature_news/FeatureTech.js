import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureTech = ({featureNews}) => {

    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter features for 'International' category
    const FeatureTech = descendingItems.filter(feature =>
        feature.category.some(cat => cat.name === 'techworld')
    );
    
    // Get the latest feature for 'International'
    const latestFeatureTech = FeatureTech.length > 0 ? FeatureTech[0] : null;
    

    // Filter restOfFeatures for 'International' category
    const allFeatureTech = descendingItems
    .filter(feature => feature.category.some(cat => cat.name === 'techworld')).slice(1, 6);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">টেক ওয়ার্ল্ড</div>
            <div className="category-wrapper__content single-feature">
                <div className="single-column">
                    {latestFeatureTech && (
                        <div className="single-news" key={latestFeatureTech.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeatureTech.id}`}><img src={latestFeatureTech.img} al={latestFeatureTech.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeatureTech.id}`}>{latestFeatureTech.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${latestFeatureTech.id}`}>{latestFeatureTech.descriptions.slice(0, 150)}</Link></div>
                        </div>
                    )}
                </div>
                <div className="single-column">
                    {allFeatureTech.map((feature) => (
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

export default FeatureTech;