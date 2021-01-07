import theme from 'styled-theming';
import themes, { mapTheme } from '../../utils/themes/index';

export const primaryColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary'),
});
