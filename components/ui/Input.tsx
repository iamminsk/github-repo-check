import { forwardRef } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "../../theme";

export const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & {
    label: string;
    errorMessage?: string;
    wrapperCss?: Interpolation<Theme>;
  }
>(({ label, name, wrapperCss, errorMessage, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label
      css={[
        { fontSize: 16, display: "block", position: "relative" },
        wrapperCss,
      ]}
    >
      <input
        ref={ref}
        name={name}
        placeholder={label}
        css={{
          display: "block",
          height: 50,
          width: "100%",
          border: "none",
          borderBottom: `2px solid ${errorMessage ? colors.RED : colors.BLUE}`,
          backgroundColor: "transparent",
          padding: 15,
          fontSize: 16,
          marginTop: 5,
          borderRadius: 0,
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          transition: "border-color .1s",
          outline: "none",
          "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        }}
        {...props}
      />
      <AnimatePresence>
        {errorMessage && (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            css={{
              position: "absolute",
              right: 0,
              bottom: -23,
              backgroundColor: colors.RED,
              color: colors.WHITE,
              padding: "0px 10px",
              fontSize: 16,
            }}
          >
            {errorMessage}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
});
