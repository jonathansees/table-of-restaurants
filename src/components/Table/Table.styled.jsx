import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  primaryColor,
} from './themes';

const StyledTable = styled.table`
  width: 100%;

  border-collapse: seperate;
  border-spacing: 0;
  text-align: left;
  border: 2px solid ${primaryColor};
`;

export const StyledHeader = styled.th`
  text-align: left;
  padding: 5px 10px;
  color: ${primaryColor};
  cursor: default;
`;

export const StyledColumn = styled.td`
  text-align: left;
  padding: 5px 10px;
  background: ${primaryColor};

  color: #fff;
`;

export const StyledRow = styled.tr`
  cursor: pointer;
`;

StyledRow.propTypes = {
  disabled: PropTypes.bool,
};

export default StyledTable;
