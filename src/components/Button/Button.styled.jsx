import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner } from '@styled-icons/fa-solid/Spinner';
import {
  textColor,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  invertHoverBackgroundColor,
  invertActiveBackgroundColor,
  padding,
  sidePadding,
  minHeight,
  minWidth,
  fontSize,
  fontHeight,
} from './themes';

const StyledButton = styled.button`
  --border-width: 2px;
  --background-color: ${backgroundColor};
  --hover-background-color: ${hoverBackgroundColor};
  --active-background-color: ${activeBackgroundColor};
  --invert-hover-background-color: ${invertHoverBackgroundColor};
  --invert-active-background-color: ${invertActiveBackgroundColor};
  
  --text-color: ${textColor};
  --font-size: ${fontSize};
  --font-height: ${fontHeight};

  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: var(--border-width) solid var(--background-color);
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  /* Gets rid of the blue highlight on mobile android */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin-left: 5px;

  font-size: var(--font-size);
  font-height: var(--font-height);

  ${(props) => props.disabled && css`
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}

  &:hover:not(.disabled) {
    background-color: var(--hover-background-color);
  }

  &:active {
    background-color: var(--active-background-color);
  }

  ${(props) => props.invert && css`
    background-color: transparent;
    color: var(--background-color);
    border: var(--border-width) solid var(--background-color);

    &:hover:not(.disabled) {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `}

  padding: ${padding} ${sidePadding};
  min-height: ${minHeight};
  min-width: ${minWidth};
`;

export const StyledSpinner = styled(Spinner)`
  margin-right: 4px;
  height: var(--font-size);
`;

StyledButton.propTypes = {
  disabled: PropTypes.bool,
  invert: PropTypes.bool,
};

StyledButton.defaultProps = {
  disabled: false,
  invert: false,
};

export default StyledButton;
