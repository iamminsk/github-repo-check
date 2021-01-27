import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { BlockWrapper } from "../ui/BlockWrapper";
import { Card } from "../ui/Card";
import { useTheme } from "../../theme";
import { Button } from "../ui/Button";

export const Summary = ({ setCurrentStep, formData, host }) => {
  const { colors, bp } = useTheme();

  const [infoText, setInfoText] = React.useState("click to copy");

  const onClick = React.useCallback(() => {
    setCurrentStep("creator");
  }, []);

  const copyOnClick = React.useCallback((url) => {
    navigator.clipboard.writeText(url);
    setInfoText("copied!");
  }, []);

  const { user, repoName, bgColor } = formData;

  const url = new URL(`https://${host}/${user}/${repoName}`);
  url.search = new URLSearchParams(formData.data).toString();

  if (bgColor) {
    url.searchParams.append("bgColor", bgColor);
  }

  return (
    <BlockWrapper css={{ marginTop: 30 }}>
      <p
        css={{
          fontSize: 50,
          lineHeight: "1",
          color: colors.TUNA,
          marginBottom: 50,
          fontFamily: "Cairo",
        }}
      >
        Everything's ready
      </p>
      <Card
        css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <p
          css={{
            fontSize: 25,
            lineHeight: "1",
            marginBottom: 20,
            fontFamily: "Cairo",
            alignSelf: "flex-start",
          }}
        >
          Your url
        </p>
        <p>{infoText}</p>
        <span
          onClick={() => copyOnClick(url)}
          css={{
            marginBottom: 30,
            backgroundColor: "rgb(62,133,218, 0.2)",
            padding: 30,
            borderRadius: 10,
            fontSize: 20,
            cursor: "pointer",
            wordBreak: "break-all",
          }}
        >
          {url.href}
        </span>
        <Link href={url.pathname + url.search}>
          <motion.a
            whileHover={{
              backgroundColor: "rgba(62,133,218, 0)",
              color: colors.BLUE,
            }}
            css={{
              height: 50,
              padding: 8,
              border: `2px solid ${colors.BLUE}`,
              borderRadius: 10,
              backgroundColor: "rgba(62,133,218, 1)",
              color: colors.WHITE,
              cursor: "pointer",
              fontSize: 20,
              fontWeight: "bold",
              outline: "none",
            }}
          >
            go to the cool summary
          </motion.a>
        </Link>
      </Card>
      <Button
        type="button"
        onClick={onClick}
        wrapperCss={{
          marginTop: 30,
          [bp.FROM_TABLET]: {
            width: 300,
          },
        }}
      >
        create a new one
      </Button>
    </BlockWrapper>
  );
};
