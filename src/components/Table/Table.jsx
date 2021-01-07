import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import Pagination from '../Pagination';
import StyledTable from './Table.styled';

const Table = (props) => {
  const {
    children,
    theme: themeProp,
    mode,
    variant,
    size,
    invert,
    rowsPerPage,
    initialPage,
    className,
  } = props;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [restaurants, setRestaurants] = useState({});

  async function fetchRestaurants() {
    const test = await fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
      headers: {
        Authorization: 'Api-Key q3MNxtfep8Gt',
      },
    })
      .then((response) => response.json());
      // .then((data) => setRestaurants(data));

    setRestaurants(test);
  }

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const totalPages = Math.ceil(children[1].length / rowsPerPage);
  const displayRows = children[1] ? children[1].slice(start, end) : null;

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledTable variant={theme.variant} className={className}>
        {children[0]}
        {displayRows}
      </StyledTable>
      <Pagination
        pageProp={currentPage}
        totalPages={totalPages}
        onClick={(event) => setCurrentPage(event.target.page)}
        onKeyPress={(event) => setCurrentPage(event.target.page)}
      />
    </ThemeProvider>
  );
};

Table.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  invert: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  initialPage: PropTypes.number,
  className: PropTypes.string,
};

Table.defaultProps = {
  children: 'Submit',
  theme: {},
  mode: null,
  variant: null,
  size: null,
  invert: false,
  rowsPerPage: 2,
  initialPage: 1,
  className: '',
};

export default withTheme(Table);
