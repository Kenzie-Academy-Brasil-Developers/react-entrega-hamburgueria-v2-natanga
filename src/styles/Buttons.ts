import styled, { css } from "styled-components";



interface InameButtons {
  nameButtons: "bntOne" | "bntTwo" | "bntTree"
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
    }
  }}
`;
