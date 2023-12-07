import React from 'react';
import { Link, useParams } from 'react-router-dom';


const FeatureNews = ({featureNews}) => {

    const { id } = useParams();

    const latestFeatureNews = featureNews[featureNews.length - 1];

    const descendingItems = featureNews.slice().reverse();

    // Get all items except the latest one
    const allFeaturesNews = descendingItems.slice(1, 5);

    return (
        <div className="feature-news-section">
            <div className="feature-news-section__content custom-row flex-container">
           
                <div className="feature-news-section__content--signle-news">
                {latestFeatureNews && (
                    <Link to={`/previews/${latestFeatureNews.id}`} key={latestFeatureNews.id}>
                    <div className="feature-image">
                        <img src={latestFeatureNews.img} alt={latestFeatureNews.alt} />
                    </div>
                    <div className="feature-text-wrapper">
                        {/* <DatePicker /> */}
                        <div className="news-title">
                            <h2>{latestFeatureNews.title}</h2>
                        </div>
                        <div className="short-description">
                            <p>{latestFeatureNews.descriptions.slice(0, 200)}</p>
                        </div>
                    </div>
                </Link>
            )}

                   
                </div>
                <div className="feature-news-section__content--double-column flex-container">
                    {allFeaturesNews.map((feature) => (
                        <div className="double-item" key={feature.id}>
                            <div className="double-item__title"><Link to={`/previews/${feature.id}`}>{feature.title}</Link></div>
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