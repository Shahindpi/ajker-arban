import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureBangladesh = ({featureNews}) => {

    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter features for 'International' category
    const FeatureBangladesh = descendingItems.filter(feature =>
        feature.category.some(cat => cat.name === 'bangladesh')
    );
    
    // Get the latest feature for 'International'
    const latestFeatureBangladesh = FeatureBangladesh.length > 0 ? FeatureBangladesh[0] : null;
    

    // Filter restOfFeatures for 'International' category
    const allFeaturesBangladesh = descendingItems
    .filter(feature => feature.category.some(cat => cat.name === 'bangladesh')).slice(1, 5);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">বাংলাদেশ</div>
            <div className="category-wrapper__content single-feature">
                <div className="single-column">
                    {latestFeatureBangladesh && (
                        <div className="single-news" key={latestFeatureBangladesh.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeatureBangladesh.id}`}><img src={latestFeatureBangladesh.img} al={latestFeatureBangladesh.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeatureBangladesh.id}`}>{latestFeatureBangladesh.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${latestFeatureBangladesh.id}`}>{latestFeatureBangladesh.descriptions.slice(0, 150)}</Link></div>
                        </div>
                    )}
                </div>
                <div className="single-column">
                    {allFeaturesBangladesh.map((feature) => (
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

export default FeatureBangladesh;