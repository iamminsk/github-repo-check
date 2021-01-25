import { motion } from "framer-motion";

import { useTheme } from "../../theme";

export const Button: React.FC<{
  type: JSX.IntrinsicElements["button"]["type"];
}> = (props) => {
  const { colors } = useTheme();

  return (
    <motion.button
      whileHover={{
        backgroundColor: "rgba(53, 96, 90, 0)",
        // color: colors.JUGNLE_GREEN,
      }}
      transition={{ duration: 0.15 }}
      css={{
        height: 50,
        width: "100%",
        // border: `2px solid ${colors.JUGNLE_GREEN}`,
        backgroundColor: "rgba(53, 96, 90, 1)",
        // color: colors.WASHED_WHITE,
        cursor: "pointer",
        fontSize: 20,
        fontWeight: "bold",
      }}
      {...props}
    ></motion.button>
  );
};
