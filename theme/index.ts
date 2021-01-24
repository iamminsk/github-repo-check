const screenSizes = {
  TABLET: 992,
  DESKTOP: 1200,
};

const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
  FROM_DESKTOP: `@media (min-width: ${screenSizes.DESKTOP}px)`,
};

const colors = {
  SONIC_SILVER: "#757575",
};

export const useTheme = () => ({
  bp,
  screenSizes,
  colors,
});
