import React from 'react'
import icon from '../../assets/images/favicon.jpg';

const NewsScroller = () => {
    const stopOnHover = () => {

    }
    return (
        <div className="scroller-section">
            <div className="scroller-section__content custom-row">
                <div className="flex-container scroller-wrapper">
                    <div className="scroller-section__content--title">শিরোনাম<span></span></div>
                    <marquee>
                        <ul className="scroller-section__content--list flex-container">
                            <li><img src={ icon } /><a href="">দু'টি এয়ারলাইন্স মানবপাচারে জড়িত: সিআইডি</a></li>
                            <li><img src={ icon } /><a href="">বিশ্বে তরুণদের ৬৩ শতাংশের ইন্টারনেট সংযোগ নেই</a></li>
                            <li><img src={ icon } /><a href="">দেশে করোনায় ৩১ মৃত্যু, নতুন শনাক্ত ২২৯৩</a></li>
                            <li><img src={ icon } /><a href="">গুচ্ছ পদ্ধতিতেই হবে সাধারণ এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষা</a></li>
                            <li><img src={ icon } /><a href="">তৃতীয় সাবমেরিন ক্যাবল প্রকল্প অনুমোদন, ব্যয় হবে ৬৯৩ কোটি টাকার বেশি</a></li>
                            <li><img src={ icon } /><a href="">আমৃত্যু উল্লেখ না থাকলে যাবজ্জীবন অর্থ ৩০ বছর কারাদণ্ড: আপিল বিভাগ</a></li>
                            <li><img src={ icon } /><a href="">বিশ্বে করোনায় মৃত্যু ১৪ লাখ ৬৭ হাজার ছাড়িয়েছে</a></li>
                            <li><img src={ icon } /><a href="">পূর্বধলায় ব্যাংক এশিয়ার ২১তম প্রতিষ্ঠা বার্ষিকী পালন</a></li>
                            <li><img src={ icon } /><a href="">কেন্দুয়ায় মাসিক আইন শৃংখলা কমিটির সভা</a></li>
                            <li><img src={ icon } /><a href="">প্রধানমন্ত্রী বঙ্গবন্ধুর আদর্শের একজন বিশ্বস্ত সহকর্মীকে হারালেন</a></li>
                        </ul>
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default NewsScroller;