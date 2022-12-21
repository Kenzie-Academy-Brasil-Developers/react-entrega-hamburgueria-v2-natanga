import styled, { css } from "styled-components";
import cart from "../assets/icons/cart.svg"
import logoot from "../assets/icons/logoot.svg"
import sherad from "../assets/icons/sherad.svg"


interface InameButtons {
  nameButtons: "bntOne" | "bntTwo" | "bntTree" | "bntCart" | "bntLogout" | "bntSherad"
}

export const StyledButtons = styled.button`
  cursor: pointer;
  ${({ nameButtons }: InameButtons) => {
    switch (nameButtons) {
      case "bntOne":
        return css`
          text-align: center;
          padding: 0px 20px;
          color: var(--Color-grey-0);
          background: var(--Color-primary);
          border: 2px solid var(--Color-primary);
          border-radius: 8px;
          :hover {
            background: var(--Color-primary-50);
            border: 2px solid var(--Color-primary-50);
          }
        `;
      case "bntTwo":
        return css`
          text-align: center;
          padding: 0px 20px;
          background: var(--Color-grey-20);
          border: 2px solid var(--Color-grey-20);
          border-radius: 8px;
          :hover {
            background: var(--Color-grey-50);
            border: 2px solid var(--Color-grey-50);
            border-radius: 8px;
          }
        `;
      case "bntTree":
        return css`
          background-color: transparent;
          text-align: center;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--Color-grey-50);
          :hover {
            color: var(--Color-gray-100);
          }
        `;
      case "bntCart":
        return css`
            background-color: transparent;
            background-image: url(${cart});
            background-position: center;
            background-repeat: no-repeat;
            border: 1px solid transparent;
            border-radius: 8px;
            width: 30px;
            height: 30px;
          `;
      case "bntLogout":
        return css`
            background-color: transparent;
            background-image: url(${logoot});
            background-position: center;
            background-repeat: no-repeat;
            border: 1px solid transparent;
            border-radius: 8px;
            width: 30px;
            height: 30px;
          `;
      case "bntSherad":
        return css`
            background-color: transparent;
            background-image: url(${sherad});
            background-position: center;
            background-repeat: no-repeat;
            border: 1px solid transparent;
            border-radius: 8px;
            width: 30px;
            height: 30px;
          `;
    }
  }}
`;
