import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useNavigate } from 'react-router-dom';

function SubContainer({ children }) {
    const nav = useNavigate();

    const handleDashboardOnClick = () => {
        nav("/dashboard")
    }

    const handleReservationOnClick = () => {
        nav("/dashboard/reservation")
    }

    const handleReservationListOnClick = () => {
        nav("/dashboard/reservationlist")
    }

    const handleReviewOnClick = () => {
        nav("/dashboard/review")
    }

    const handleSettingsOnClick = () => {
        nav("/dashboard/settings")
    }
    return (
        <div css={s.layout}>
            {children}
            <div css={s.footer}>
                <button onClick={handleDashboardOnClick}>홈</button>
                <button onClick={handleReservationOnClick}>예약 하기</button>
                <button onClick={handleReservationListOnClick}>예약 조회</button>
                <button onClick={handleReviewOnClick}>리뷰 쓰기 및 조회</button>
                <button onClick={handleSettingsOnClick}>설정</button>
            </div>
            <Routes>
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path='/reservation' element={<ReservationPage />} />
                <Route path='/reservationlist' element={<ReservationListPage />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/settings' element={<SettingsPage />} />
            </Routes>
        </div>
    );
}

export default SubContainer;