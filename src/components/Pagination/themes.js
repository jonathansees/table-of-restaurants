import theme from 'styled-theming';
import themes, { mapTheme } from '../../utils/themes/index';

export const textColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'mainLight'),
  passive: mapTheme(themes, 'mainDark'),
  special: mapTheme(themes, 'mainLight'),
  destructive: mapTheme(themes, 'mainLight'),
});

export const backgroundColor = theme.variants('mode', 'variant', {
  primary: mapTheme(themes, 'primary'),
  passive: mapTheme(themes, 'neutral'),
  special: mapTheme(themes, 'warning'),
  destructive: mapTheme(themes, 'danger'),
});

export const padding = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '5'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '5'),
  large: mapTheme(themes, 'spatialUnits', 'array', '5'),
});

export const minHeight = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'spatialUnits', 'array', '6'),
  medium: mapTheme(themes, 'spatialUnits', 'array', '9'),
  large: mapTheme(themes, 'spatialUnits', 'array', '12'),
});

export const fontSize = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'typography.size_1.size'),
  medium: mapTheme(themes, 'typography.size_3.size'),
  large: mapTheme(themes, 'typography.size_4.size'),
});

export const fontHeight = theme.variants('mode', 'size', {
  small: mapTheme(themes, 'typography.size_1.height'),
  medium: mapTheme(themes, 'typography.size_3.height'),
  large: mapTheme(themes, 'typography.size_4.height'),
});
