import React from 'react';
import { Link, useParams } from 'react-router-dom';


function Latest({featureNews}){
    
    const { id } = useParams();

    const descendingItems = featureNews.slice().reverse();

    // Get all items except the latest one
    const latestNews = descendingItems.slice(0, 5);

    return(
        <div className="latest-bulletins-container">
            
            {latestNews.map((lastNews) => (
                <div className="latest-bulletins-container__single" key={lastNews.id}>
                <Link to={`/previews/${lastNews.id}`}>
                    <div className="latest-bulletins-container__single--img"><img src={lastNews.img} al={lastNews.alt} /></div>
                    <div className="latest-bulletins-container__single--title">{lastNews.title.slice(0, 60)}</div>
                </Link>
            </div>
            ))}
        </div>
    );
}

export default Latest;