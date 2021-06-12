import React from 'react';
import ImageOne from '../images/news1.jpg';
import ImageTwo from '../images/news2.jpg';

const MenuBar = () => {
    return (
        <div>
            <div className='menu-card'>
                <img src={ImageOne} alt='news' className='object-contain md:object-scale-down h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Breaking News</h2>
                    <p className='mb-2'>Latest Breaking News</p>
                    <span>12-06-2021</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={ImageTwo} alt='egg' className='object-contain md:object-scale-down h-full rounded mb-20 shadow' />
                <div className='center-content'>
                    <h2 className='text-2xl mb-2'>Breaking News</h2>
                    <p className='mb-2'>Latest Breaking News</p>
                    <span>12-06-2021</span>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;