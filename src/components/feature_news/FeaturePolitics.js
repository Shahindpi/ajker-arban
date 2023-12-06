import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeaturePolitics = ({featureNews}) => {

    const { id } = useParams();

    // Filter features for 'politics' category
    const politicsFeatures = featureNews.filter(feature =>
        feature.category.some(cat => cat.name === 'politics')
    );
    
    // Get the latest feature for 'politics'
    const latestFeaturePolitics = politicsFeatures.length > 0 ? politicsFeatures[0] : null;
    

    // Filter restOfFeatures for 'politics' category
    const allFeaturesPolitics = featureNews
    .filter(feature => feature.category.some(cat => cat.name === 'politics')).slice(1, 6);

    return (
        <div className="category-wrapper">
            <div className="category-section__content--headline">রাজনীতি</div>
            <div className="category-wrapper__content single-feature">
                <div className="single-column">
                    {latestFeaturePolitics && (
                        <div className="single-news" key={latestFeaturePolitics.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeaturePolitics.id}`}><img src={latestFeaturePolitics.img} al={latestFeaturePolitics.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeaturePolitics.id}`}>{latestFeaturePolitics.title}</Link></div>
                            <div className="single-news__description">{latestFeaturePolitics.descriptions.slice(0, 200)}</div>
                        </div>
                    )}
                </div>
                <div className="single-column">
                    {allFeaturesPolitics.map((feature) => (
                        <div className="single-news" key={feature.id}>
                            <div className="single-news__image"><Link to={`/previews/${latestFeaturePolitics.id}`}><img src={feature.img} alt={feature.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${latestFeaturePolitics.id}`}>{feature.title}</Link></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturePolitics;