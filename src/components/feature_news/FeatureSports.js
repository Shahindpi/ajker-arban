import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureSports = ({featureNews}) => {

    const { id } = useParams();

    // Filter features for 'sports' category
    const FeatureSports = featureNews.filter(feature =>
        feature.category.some(cat => cat.name === 'sports')
    );
    
    // Get the latest feature for 'sports'
    const latestFeatureSports = FeatureSports.length > 0 ? FeatureSports[0] : null;
    

    // Filter restOfFeatures for 'sports' category
    const allFeaturesSports = featureNews
    .filter(feature => feature.category.some(cat => cat.name === 'sports')).slice(1, 5);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">খেলা</div>
            <div className="category-wrapper__content single-feature">
                <div className="single-column">
                    {latestFeatureSports && (
                        <div className="single-news" key={latestFeatureSports.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeatureSports.id}`}><img src={latestFeatureSports.img} al={latestFeatureSports.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeatureSports.id}`}>{latestFeatureSports.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${latestFeatureSports.id}`}>{latestFeatureSports.descriptions.slice(0, 150)}</Link></div>
                        </div>
                    )}
                </div>
                <div className="single-column">
                    {allFeaturesSports.map((feature) => (
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

export default FeatureSports;