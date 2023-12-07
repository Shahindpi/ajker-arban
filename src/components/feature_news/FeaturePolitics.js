import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FeaturePolitics = ({featureNews}) => {

    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Filter restOfFeatures for 'politics' category
    const featurePoliticsCol1 = descendingItems
    .filter(descendingItems => descendingItems.category.some(cat => cat.name === 'politics')).slice(0, 4);
    
    // Filter restOfFeatures for 'politics' category
    const featurePoliticsCol2 = descendingItems
    .filter(descendingItems => descendingItems.category.some(cat => cat.name === 'politics')).slice(1, 5);

    return (
        <div className="category-wrapper modify-category-section">
            <div className="category-section__content--headline">রাজনীতি</div>
            <div className="category-wrapper__content cat-double-feature">
                <div className="single-column feature-politics-col">
                    {featurePoliticsCol1.map((politics) => (
                        <div className="single-news feature-politics" key={politics.id}>
                            <div className="single-news__image"><Link to={`/previews/${politics.id}`}><img src={politics.img} alt={politics.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${politics.id}`}>{politics.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${politics.id}`}>{politics.descriptions.slice(0, 100)}...</Link></div>
                        </div>
                    ))}
                </div> 
                <div className="single-column feature-politics-col">
                    {featurePoliticsCol2.map((politics) => (
                        <div className="single-news feature-politics" key={politics.id}>
                            <div className="single-news__image"><Link to={`/previews/${politics.id}`}><img src={politics.img} alt={politics.alt} /></Link></div>
                            <div className="single-news__title"><Link to={`/previews/${politics.id}`}>{politics.title}</Link></div>
                            <div className="single-news__description"><Link to={`/previews/${politics.id}`}>{politics.descriptions.slice(0, 100)}...</Link></div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    );
}

export default FeaturePolitics;