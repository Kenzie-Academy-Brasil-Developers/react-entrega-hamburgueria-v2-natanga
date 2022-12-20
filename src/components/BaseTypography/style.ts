import styled, { css } from "styled-components";
import { BaseTypography } from ".";

interface IStyledTypography {
  classText: "Heading1" | "Heading2" | "Heading3" | "Heading4" | "Heading" | "Body" | "Body600" | "Caption"
}

export const StyledTypography = styled(BaseTypography)`
  margin: 0;
  ${({ classText }: IStyledTypography) => {
    switch (classText) {
      case "Heading1":
        return css`
          font-weight: 700;
          font-size: 26px;
          line-height: 34px;
        `;
      case "Heading2":
        return css`
          font-weight: 700;
          font-size: 22px;
          line-height: 24px;
        `;
      case "Heading3":
        return css`
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
        `;
      case "Heading4":
        return css`
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
        `;
      case "Heading":
        return css`
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
        `;
      case "Body":
        return css`
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        `;
      case "Body600":
        return css`
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
        `;
      case "Caption":
        return css`
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
        `;
    }
  }}
`;
