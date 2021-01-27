const screenSizes = {
  TABLET: 992,
  DESKTOP: 1200,
};

const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
  FROM_DESKTOP: `@media (min-width: ${screenSizes.DESKTOP}px)`,
};

const colors = {
  TUNA: "#EA5C5A",
  BLACK: "#000",
  WHITE: "#fff",
  BLUE: "#3E85DA", // rgb(62,133,218)
  RED: "#CA0303",
};

export const useTheme = () => ({
  bp,
  screenSizes,
  colors,
});
