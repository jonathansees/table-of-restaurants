import { colors } from './colors';
// import { breakpoints } from './breakpoints';
// import { backgroundColors } from './backgrounds';
import { spatialUnits } from './spatial';
import { typography } from './mixins/typography';

// export * from './breakpoints';
// export * from './backgrounds';
export * from './colors';
export * from './spatial';
export * from './mixins/typography';

export default {
  // ...breakpoints,
  ...colors,
  // backgroundColors,
  spatialUnits,
  typography,
};
