/** @jsx jsx */
import { forwardRef } from "react";
import { Interpolation, Theme, jsx } from "@emotion/react";

interface BlockWrapperProps {
  wrapperCss?: Interpolation<Theme>;
  as?: keyof JSX.IntrinsicElements;
}

export const BlockWrapper = forwardRef<
  HTMLDivElement,
  BlockWrapperProps & JSX.IntrinsicElements["div"]
>(({ as: Element = "section", children, wrapperCss, ...rest }, ref) => {
  return (
    <Element css={wrapperCss}>
      <div
        ref={ref}
        css={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 30px",
          height: "100%",
        }}
        {...rest}
      >
        {children}
      </div>
    </Element>
  );
});
