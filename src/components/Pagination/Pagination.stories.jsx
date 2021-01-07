import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Pagination />
  </ThemeProvider>
);
