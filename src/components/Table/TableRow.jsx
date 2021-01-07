import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledRow, StyledColumn } from './Table.styled';

const TableRow = (props) => {
  const {
    expandableContent,
    children,
    className,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledRow variant="primary" onClick={() => setIsOpen(!isOpen)} className={className}>
        {children}
      </StyledRow>
      {isOpen && expandableContent ? (
        <StyledRow>
          <StyledColumn colSpan={children.length} className={className}>
            {expandableContent}
          </StyledColumn>
        </StyledRow>
      ) : null}
    </>
  );
};

TableRow.propTypes = {
  expandableContent: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

TableRow.defaultProps = {
  expandableContent: null,
  children: 'Submit',
  className: '',
};

export default TableRow;
