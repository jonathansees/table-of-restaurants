import styled, { css } from 'styled-components';
import {
  textColor,
  backgroundColor,
} from './themes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')}
`;

export const Summary = styled.div`
  margin-right: 10px;
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .control:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const Control = styled.button`
  --background-color: ${backgroundColor};
  --text-color: ${textColor};

  background-color: transparent;
  cursor: pointer;
  border: 1px solid var(--background-color);
  border-radius: 4px;
  color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:not(:last-of-type) {
    margin-right: 5px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  &:not(:disabled) {
    &:hover {
      color: var(--text-color);
      background: var(--background-color);
    }
  }

  ${(props) => props.active && css`
    color: var(--text-color);
    background: var(--background-color);
    cursor: default;
  
    &:not(:disabled) {
      &:hover {
        background: var(--background-color);
      }
    }
  `}
`;
