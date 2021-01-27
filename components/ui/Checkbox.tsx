import { forwardRef } from "react";
import { Interpolation, Theme } from "@emotion/react";

import { useTheme } from "../../theme";

export const Checkbox = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & {
    label: string;
    wrapperCss?: Interpolation<Theme>;
  }
>(({ label, name, wrapperCss, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label
      css={[
        {
          fontSize: 18,
          cursor: "pointer",
        },
        wrapperCss,
      ]}
    >
      <input
        ref={ref}
        name={name}
        type="checkbox"
        css={{ marginRight: 15 }}
        {...props}
      />
      {label}
    </label>
  );
});
