import React from "react";
import { useForm } from "react-hook-form";
import { HexColorPicker } from "react-colorful";
import { motion } from "framer-motion";
import "react-colorful/dist/index.css";

import { Input } from "../ui/Input";
import { BlockWrapper } from "../ui/BlockWrapper";
import { Card } from "../ui/Card";
import { useTheme } from "../../theme";
import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";

interface CreatorProps {
  setCurrentStep: (currentStep) => void;
  setFormData: (formData) => void;
}

export const Creator: React.FC<CreatorProps> = ({
  setCurrentStep,
  setFormData,
}) => {
  const { colors } = useTheme();
  const form = useForm({
    reValidateMode: "onSubmit",
  });
  const { register, handleSubmit, errors, watch } = form;

  const [isPickerVisible, setIsPickerVisible] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("#fff");

  const onFormSubmit = React.useCallback(
    (data) => {
      setFormData({
        user: watch("name"),
        repoName: watch("repoName"),
        bgColor: isPickerVisible ? bgColor : undefined,
        data: {
          showMainLanguage: watch("showMainLanguage"),
          showOpenIssues: watch("showOpenIssues"),
        },
      });
      setCurrentStep("summary");
    },
    [isPickerVisible, form]
  );

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
        Fill following data
      </p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Card css={{ marginBottom: 20 }}>
          <p
            css={{
              fontSize: 25,
              lineHeight: "1",
              marginBottom: 30,
              fontFamily: "Cairo",
            }}
          >
            Base info
          </p>
          <Input
            label="user name"
            name="name"
            ref={register({
              required: "required field",
              validate: {
                exists: async (value) => {
                  const res = await fetch(
                    `https://api.github.com/users/${value}`
                  );
                  return res.ok || "user doesn't exist";
                },
              },
            })}
            errorMessage={errors.name?.message}
            wrapperCss={{ marginBottom: 10 }}
          />
          <Input
            label="repo name"
            name="repoName"
            ref={register({
              required: "required field",
              validate: {
                exists: async (value) => {
                  const res = await fetch(
                    `https://api.github.com/repos/${watch("name")}/${value}`
                  );
                  return res.ok || "repo doesn't exist";
                },
              },
            })}
            errorMessage={errors.repoName?.message}
            wrapperCss={{ marginBottom: 10 }}
          />
        </Card>
        <Card css={{ marginBottom: 20 }}>
          <p
            css={{
              fontSize: 25,
              lineHeight: "1",
              marginBottom: 30,
              fontFamily: "Cairo",
            }}
          >
            What to include in the summary?
          </p>
          <div css={{ display: "flex", flexDirection: "column" }}>
            <Checkbox
              ref={register}
              label="main language"
              name={`showMainLanguage`}
            />
            <Checkbox
              ref={register}
              label="open issues"
              name={`showOpenIssues`}
            />
          </div>
        </Card>
        <Card
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.span
            role="button"
            onClick={() => setIsPickerVisible(!isPickerVisible)}
            whileHover={{
              backgroundColor: colors.BLUE,
              color: colors.WHITE,
            }}
            css={{
              marginBottom: isPickerVisible ? 20 : 0,
              cursor: "pointer",
              color: colors.BLUE,
              backgroundColor: "transparent",
              padding: 5,
              borderRadius: 10,
            }}
          >
            {isPickerVisible ? "nahh i want default bgColor" : "choose bgColor"}
          </motion.span>
          {isPickerVisible && (
            <HexColorPicker
              color={bgColor}
              onChange={(color) => {
                setBgColor(color);
              }}
            />
          )}
        </Card>
        <Button type="submit" wrapperCss={{ marginTop: 30 }}>
          ready! show me url
        </Button>
      </form>
    </BlockWrapper>
  );
};
