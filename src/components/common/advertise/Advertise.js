import React from 'react';

const Advertise = (props) => {
    return(
        <div className="advertise-section">
            <a href="">
                <img src={props.ads} />
            </a>
        </div>
    );
}

export default Advertise;