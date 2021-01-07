import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledThead,
  StyledTh,
  StyledTbody,
  StyledTr,
  StyledTd,
} from './ExpandableContent.styled';

const ExpandableContent = (props) => {
  const {
    restaurant,
  } = props;

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>Hours</StyledTh>
          <StyledTh>Attire</StyledTh>
          <StyledTh>Website</StyledTh>
          <StyledTh>Tags</StyledTh>
        </StyledTr> 
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <StyledTd>{restaurant.hours}</StyledTd>
          <StyledTd>{restaurant.attire}</StyledTd>
          <StyledTd>{restaurant.website}</StyledTd>
          <StyledTd>{restaurant.tags.split(',').join(', ')}</StyledTd>
        </StyledTr>
      </StyledTbody>
    </StyledTable>
  );
};

ExpandableContent.propTypes = {
  restaurant: PropTypes.string,
};

ExpandableContent.defaultProps = {
  restaurant: '',
};

export default ExpandableContent;
