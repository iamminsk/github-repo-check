const screenSizes = {
  TABLET: 992,
  DESKTOP: 1200,
};

export const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
  FROM_DESKTOP: `@media (min-width: ${screenSizes.DESKTOP}px)`,
};

export const theme = { bp, screenSizes };

export const useTheme = () => ({
  bp,
  screenSizes,
});
