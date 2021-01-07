import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import {
  Control,
  ControlGroup,
  Wrapper,
  Summary,
} from './Pagination.styled';

const Pagination = (props) => {
  const {
    pageProp,
    totalPages,
    noResultsMessage,
    theme: themeProp,
    mode,
    variant,
    size,
    disabled,
    className,
    onClick,
  } = props;

  const [currentPage, setCurrentPage] = useState(pageProp);

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  const handleChange = (page) => {
    setCurrentPage(page);

    onClick({
      target: {
        ...props,
        page,
      },
    });
  };

  const renderPagination = (index) => {
    const active = index === currentPage - 1;
    const page = index + 1;

    return (
      <Control
        type="button"
        active={active}
        variant={theme.variant}
        onClick={() => handleChange(page)}
        onKeyPress={() => handleChange(page)}
        role="button"
        tabIndex={page}
        className={className}
        disabled={disabled}
      >
        {page}
      </Control>
    );
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      {totalPages > 0
        ? (
          <Wrapper>
            <Summary>
              {`Page ${currentPage} of ${totalPages}`}
            </Summary>
            <ControlGroup>
              {[...Array(totalPages)].map((value, index) => (
                renderPagination(index)
              ))}
            </ControlGroup>
          </Wrapper>
        ) : <Wrapper center>{noResultsMessage}</Wrapper>}
    </ThemeProvider>
  );
};

Pagination.propTypes = {
  pageProp: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  noResultsMessage: PropTypes.string,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Pagination.defaultProps = {
  noResultsMessage: 'Could not find results, please try another search.',
  theme: {},
  mode: null,
  variant: null,
  size: null,
  className: '',
  disabled: false,
  onClick: {},
};

export default withTheme(Pagination);
