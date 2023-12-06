import React from 'react';
import { Link, useParams } from 'react-router-dom';


const FeatureNews = ({featureNews}) => {

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
        <div className="feature-news-section">
            <div className="feature-news-section__content custom-row flex-container">
           
                <div className="feature-news-section__content--signle-news">
                {latestFeaturePolitics && (
                    <Link to={`/previews/${latestFeaturePolitics.id}`} key={latestFeaturePolitics.id}>
                    <div className="feature-image">
                        <img src={latestFeaturePolitics.img} alt={latestFeaturePolitics.alt} />
                    </div>
                    <div className="feature-text-wrapper">
                        {/* <DatePicker /> */}
                        <div className="news-title">
                            <h2>{latestFeaturePolitics.title}</h2>
                        </div>
                        <div className="short-description">
                            <p>{latestFeaturePolitics.descriptions.slice(0, 200)}</p>
                        </div>
                    </div>
                </Link>
            )}

                   
                </div>
                <div className="feature-news-section__content--double-column flex-container">
                    {allFeaturesPolitics.map((feature) => (
                        <div className="double-item" key={feature.id}>
                            <div className="double-item__title"><Link to="">{feature.title}</Link></div>
                            {/* <DatePicker /> */}
                            <Link to={`/previews/${feature.id}`} className="flex-container double-content">
                                <div className="double-item__image"><img src={feature.img} atl={feature.alt} /></div>
                                <div className="double-item__description">{feature.descriptions.slice(0, 100)}</div>
                            </Link>
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
}

export default FeatureNews;