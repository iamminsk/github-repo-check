import React from "react";

import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export const Init = ({ setCurrentStep }) => {
  const onClick = React.useCallback(() => {
    setCurrentStep("creator");
  }, []);

  const { colors } = useTheme();

  return (
    <BlockWrapper
      wrapperCss={{ marginTop: 20 }}
      css={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Card
        css={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <h2
          css={{
            fontSize: 50,
            lineHeight: "1",
            color: colors.TUNA,
            marginBottom: 50,
          }}
        >
          Create cool
          <br />
          repo's summary
        </h2>
        <Button type="button" onClick={onClick}>
          begin
        </Button>
      </Card>
    </BlockWrapper>
  );
};
