import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeatureEconomics = ({featureNews}) => {

    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter restOfFeatures for 'politics' category
    const featureEconomics = descendingItems
    .filter(descendingItems => descendingItems.category.some(cat => cat.name === 'bangladesh')).slice(0, 10);

    return(
        <div className="category-wrapper">
            <div className="category-section__content--headline">অর্থনীতি</div>
            <div className="category-wrapper__content cat-thumbnail">
                <div className="single-column">
                    {featureEconomics.map((economics) => (
                        <div className="single-news" key={economics.id}>
                            <div className="single-news__image"><Link to={`/previews/${economics.id}`}><img src={economics.img} alt={economics.alt} /></Link></div>
                            <div className="text-wrapper">
                                <div className="single-news__title"><Link to={`/previews/${economics.id}`}>{economics.title}</Link></div>
                                <div className="single-news__description"><Link to={`/previews/${economics.id}`}>{economics.descriptions.slice(0, 100)}</Link></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureEconomics;