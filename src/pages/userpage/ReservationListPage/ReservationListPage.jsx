import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import MainLayout from '../../../components/usercomponents/MainLayout/MainLayout';
import YearBox from '../../../components/usercomponents/reservationListPage/YearBox/YearBox';
import DashBoardTopBar from '../../../components/usercomponents/dashBoard/DashBoardTopBar/DashBoardTopBar';

function ReservationListPage(props) {

    return (
        <MainLayout>
            <SubContainer>
                <DashBoardTopBar title={"예약조회"} />  
               <div css={s.layout}>
                    <YearBox year={2024}/>
                    <YearBox year={2025}/>
               </div>
            </SubContainer>
        </MainLayout>

    );
}

export default ReservationListPage;