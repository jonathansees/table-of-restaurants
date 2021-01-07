import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './Table.styled';

const TableHeader = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <StyledHeader variant="primary" className={className}>
      {children}
    </StyledHeader>
  );
};

TableHeader.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

TableHeader.defaultProps = {
  children: 'Submit',
  className: '',
};

export default TableHeader;
