import { motion } from "framer-motion";
import { Interpolation, Theme } from "@emotion/react";

import { useTheme } from "../../theme";

export const Button: React.FC<{
  type: JSX.IntrinsicElements["button"]["type"];
  onClick?: JSX.IntrinsicElements["button"]["onClick"];
  wrapperCss?: Interpolation<Theme>;
}> = (props) => {
  const { colors } = useTheme();

  return (
    <motion.button
      whileHover={{
        backgroundColor: "rgba(62,133,218, 0)",
        color: colors.BLACK,
      }}
      transition={{ duration: 0.15 }}
      css={[
        {
          height: 50,
          width: "100%",
          border: `2px solid ${colors.BLUE}`,
          borderRadius: 10,
          backgroundColor: "rgba(62,133,218, 1)",
          color: colors.WHITE,
          cursor: "pointer",
          fontSize: 20,
          fontWeight: "bold",
          outline: "none",
        },
        props.wrapperCss,
      ]}
      {...props}
    ></motion.button>
  );
};
