import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import MainHeader from '../Components/MainHeader';
import { reset } from '../Modules/searchForm';
const MainHeaderContainer = () => {
    const [isScrollTop, setIsScrollTop] = useState(window.scrollY < 40);
    const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
    const [initAnimation, setInitAnimation] = useState(false);
    const onScroll = e => {
        setIsScrollTop(e && window.scrollY < 40);
        setIsSearchBtnClicked(false);
    };

    useEffect(() => {
        if (!initAnimation && window.scrollY > 40) {
            setInitAnimation(true);
        }
        window.addEventListener('scroll', throttle(onScroll, 150));
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [onScroll, initAnimation]);

    const handleLogoClick = e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchBtnClick = () => {
        setIsSearchBtnClicked(true);
    };
    return (
        <MainHeader
            initAnimation={initAnimation}
            isScrollTop={isScrollTop}
            isSearchBtnClicked={isSearchBtnClicked}
            handleLogoClick={handleLogoClick}
            handleSearchBtnClick={handleSearchBtnClick}
        ></MainHeader>
    );
};

export default MainHeaderContainer;
