import styled, { css } from "styled-components";
import { lighten } from "polished";

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings.small} 0;
    border-bottom: 2px solid ${lighten(0.7, theme.colors.black)};

    @media (max-width: 1024px) {
      display: none;
    }
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};
  `}
`;
export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const InfosWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;
export const InfosCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`;
export const InfosCardIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 42px;
    height: 42px;
    background-color: gray;
    border-radius: 50%;
  `}
`;
export const InfosCardTexts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > b {
      font-size: ${theme.font.sizes.xxsmall};
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`;
