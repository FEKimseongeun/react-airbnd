import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import SearchPage from '../Pages/SearchPage';
import FlexiblePage from '../Pages/FlexiblePage';
import OnlineExperiencePage from '../Pages/OnlineExperiencePage';


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                {/*<Route path="/Search" element={SearchPage} />
                <Route path="/online" element={OnlineExperiencePage} />
                <Route path="/flex" element={FlexiblePage} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;