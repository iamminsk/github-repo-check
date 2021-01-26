import React from "react";
import Link from "next/link";

export const Summary = ({ setCurrentStep, formData }) => {
  const onClick = React.useCallback(() => {
    setCurrentStep("creator");
  }, []);

  const { user, repoName, bgColor } = formData;
  const domain = process.env.VERCEL_URL || "localhost:3000";
  const url = `/${user}/${repoName}?bgColor=${bgColor}`;

  return (
    <section>
      <p>Summary</p>
      <h2>Your repo summary is available under:</h2>
      <Link href={url}>
        <a>{`https://${domain + url}`}</a>
      </Link>
      <p>{formData.bgColor}</p>
      <p>{formData.user}</p>
      <p>{formData.repoName}</p>
      <button onClick={onClick}>create new</button>
    </section>
  );
};
