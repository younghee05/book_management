
import './App.css';
import { BookMainStyle } from './style/global';
import MainHeader from './components/MainHeader/MainHeader';
import MainPage from './page/MainPage/MainPage';
import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Global styles={BookMainStyle} />
            <MainHeader />
            <Routes>
                <Route path="/*" element={<MainPage />} />
            </Routes>
        </>
    );
}

export default App;
