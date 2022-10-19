import styled, { css } from "styled-components";

interface TodoCard_CardProps {
  isChecked: boolean;
}

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    padding: ${theme.spacings.xxlarge} 0;
    border: 1px solid red;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-items: center;
    align-content: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid blue;
    row-gap: 3rem;
    column-gap: 3rem;
  `}
`;

export const TodoCard_Card = styled.div<TodoCard_CardProps>`
  ${({ theme, isChecked }) => css`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 15rem;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    gap: ${theme.spacings.xsmall};

    & > h2 {
      text-decoration: ${isChecked ? "line-through" : "none"};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Todo_Inputs_Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: ${theme.spacings.medium} 0;
    gap: ${theme.spacings.medium};

    & > label {
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: ${theme.spacings.xxsmall};
    }

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.6rem;
      background-color: ${theme.colors.primary};
      margin-top: 1.6rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;

export const Todo_Input = styled.input`
  ${({ theme }) => css``}
`;
