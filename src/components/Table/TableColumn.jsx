import React from 'react';
import PropTypes from 'prop-types';
import { StyledColumn } from './Table.styled';

const TableColumn = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <StyledColumn variant="primary" className={className}>
      {children}
    </StyledColumn>
  );
};

TableColumn.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

TableColumn.defaultProps = {
  children: 'Submit',
  className: '',
};

export default TableColumn;
