import { BlockWrapper } from "../../components/ui/BlockWrapper";

export const ErrorInfo = () => (
  <main>
    <BlockWrapper
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      wrapperCss={{ minHeight: "100vh" }}
    >
      <p css={{ fontFamily: "Cairo", fontSize: 80, lineHeight: "1.1" }}>
        Ayyyyy something went wrong
      </p>
    </BlockWrapper>
  </main>
);
