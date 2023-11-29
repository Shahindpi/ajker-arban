import React from 'react';
import planIcon from '../../../assets/icon/plane.png';
import clockIcon from '../../../assets/icon/clock.png';

const DatePicker = () => {
    return(
        <div className="flex-container news-time">
            <span><img src={planIcon} />আন্তর্জাতিক</span>|<span><img src={clockIcon} />আপডেট ৩৫ মিনিট আগে</span>
        </div>
    );
}

export default DatePicker;