import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px 5px;
    width: 100%;

    & > button {
        display: flex;
        align-items: center;
        font-size: 25px;
    }
`;