import React from 'react'
import { Link, useParams } from 'react-router-dom';
import icon from '../../assets/images/favicon.jpg';

const NewsScroller = ({featureNews}) => {
       
    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Get all items except the latest one
    const latestNews = descendingItems.slice(0, 20);

    return (
        <div className="scroller-section">
            <div className="scroller-section__content custom-row">
                <div className="flex-container scroller-wrapper">
                    <div className="scroller-section__content--title">শিরোনাম<span></span></div>
                    <marquee>
                        <ul className="scroller-section__content--list flex-container">
                            {latestNews.map((lastNews) => (
                                <li key={lastNews.id}>
                                    <img src={ icon } /><Link to={`/previews/${lastNews.id}`}>{lastNews.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default NewsScroller;