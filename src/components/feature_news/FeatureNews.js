import React from 'react';
import { Link } from 'react-router-dom';
import featureImg from '../../assets/images/feature.jpg';
import DatePicker from '../common/date_picker/DatePicker'
import doubleFeature1 from '../../assets/images/kader.jpg';
import news2 from '../../assets/images/news2.jpg';
import news4 from '../../assets/images/news4.jpg';
import news5 from '../../assets/images/news5.jpg';

const FeatureNews = () => {
    return (
        <div className="feature-news-section">
            <div className="feature-news-section__content custom-row flex-container">
                <div className="feature-news-section__content--signle-news">
                    <div className="feature-image">
                    <Link to ="/"><img src={featureImg} alt="Feature" /></Link>
                    </div>
                    <div className="feature-text-wrapper">
                        <DatePicker />
                        <div className="news-title">
                            <a href='/'>ফাইজারের টিকা ব্যবহারের অনুমতি দিল যুক্তরাজ্য</a>
                        </div>
                        <div className="short-description">
                            বিশ্বের প্রথম দেশ হিসেবে ফাইজার ও বায়োএনটেকের তৈরি করোনাভাইরাসের টিকা ব্যবহারের অনুমতি দিয়েছে যুক্তরাজ্য।দেশটিতে করোনা ...
                        </div>
                    </div>
                </div>
                <div className="feature-news-section__content--double-column flex-container">
                    <div className="double-item">
                        <div className="double-item__title"><a href="">বাইডেনের নির্বাহী আদেশের বিরুদ্ধে ১২ অঙ্গরাজ‌্যে মামলা</a></div>
                        <DatePicker />
                        <a href="" className="flex-container double-content">
                            <div className="double-item__image"><img src={news2} /></div>
                            <div className="double-item__description">যুক্তরাষ্ট্রে প্রেসিডেন্ট জো বাইডেনের জলবায়ু সংক্রান্ত একটি নির্বাহী আদেশের বিরুদ্ধে ১২টি অঙ্গরাজ‌্যে মামলা হয়েছে। ...</div>
                        </a>
                    </div>
                    <div className="double-item">
                        <div className="double-item__title"><a href="">কৃতজ্ঞতা বোধ নেই বিএনপির: ওবায়দুল কাদের</a></div>
                        <DatePicker />
                        <a className="flex-container double-content" href="">
                            <div className="double-item__image"><img src={doubleFeature1} /></div>
                            <div className="double-item__description">আওয়ামী লীগের সাধারণ সম্পাদক এবং সড়ক পরিবহন ও সেতুমন্ত্রী ওবায়দুল কাদের বলেছেন, ...</div>
                        </a>
                    </div>
                    <div className="double-item">
                        <div className="double-item__title"><a href="">পূর্বধলায় আওয়ামীলীগের কর্মীসভা অনুষ্ঠিত ...git </a></div>
                        <DatePicker />
                        <a className="flex-container double-content" href="">
                            <div className="double-item__image"><img src={news4} /></div>
                            <div className="double-item__description">নেত্রকোনার পূর্বধলায় শুক্রবার (১২ মার্চ) ধলামূলগাঁও ইউনিয়ন আওয়ামীলীগ ও অঙ্গসহযোগি সংগঠনের উদ্যোগে এক ...</div>
                        </a>
                    </div>
                    <div className="double-item">
                        <div className="double-item__title"><a href="">সাইফ কারিনার সন্তানকে যে কারণে এখনো দেখতে পাননি শর্মিলা ঠাকুর</a></div>
                        <DatePicker />
                        <a className="flex-container double-content" href="">
                            <div className="double-item__image"><img src={news5} /></div>
                            <div className="double-item__description">সাইফ, করিনার নবজাতককে এখনো দেখতে পাননি শর্মিলা ঠাকুর। সে খবর প্রকাশ্যে আসতেই ...</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureNews;