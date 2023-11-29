import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import defaultImage from '../../assets/images/default-image.jpg';


class HomeSlider extends Component {
    // state = {
    //     items: [
    //     {id: 1, title: 'item #1'},
    //     {id: 2, title: 'item #2'},
    //     {id: 3, title: 'item #3'},
    //     {id: 4, title: 'item #4'},
    //     {id: 5, title: 'item #5'}
    //     ]
    // }


  render () {
    // const { items } = this.state;
    const breakPoints = [
        {width: 1, itemsToShow : 1},
        {width: 500, itemsToShow : 3},
        {width: 768, itemsToShow : 3},
        {width: 1024, itemsToShow : 4},
        {width: 1440, itemsToShow : 6}
    ];
    return (
      <div className="category-section__content--column category-wrapper">
        <div className="category-section__content--headline">
            বিনোদন
        </div>
          <div className="cat-carousel">
            <Carousel breakPoints = {breakPoints}>
            {/* {items.map(item => <div key={item.id}>{item.title}</div>)} */}
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
            <a href="" className="carousel-item">
                <div className="carousel-item__image"><img src={defaultImage} /></div>
                <div className="carousel-item__title">ট্রেনের টয়লেট ও একজন অখিলচন্দ্রের গল্প</div>
            </a>
        </Carousel>
          </div>
      </div>
    );
  }
}

export default HomeSlider;

