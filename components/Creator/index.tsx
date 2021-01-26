import React from "react";
import { useForm } from "react-hook-form";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

import { Input } from "../ui/Input";

export const Creator = ({ setCurrentStep, setFormData }) => {
  const form = useForm({
    reValidateMode: "onSubmit",
  });
  const { register, handleSubmit, errors, getValues } = form;

  const onFormSubmit = React.useCallback((data) => {
    setFormData({
      user: getValues("name"),
      repoName: getValues("repoName"),
      bgColor: encodeURIComponent(bgColor),
    });
    setCurrentStep("summary");
  }, []);

  const [bgColor, setBgColor] = React.useState("#b32aa9");

  return (
    <section>
      <p>Creator</p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
                  `https://api.github.com/repos/${getValues("name")}/${value}`
                );
                return res.ok || "repo doesn't exist";
              },
            },
          })}
          errorMessage={errors.repoName?.message}
          wrapperCss={{ marginBottom: 10 }}
        />
        <HexColorPicker color={bgColor} onChange={setBgColor} />
        <button type="submit">get url</button>
      </form>
    </section>
  );
};
