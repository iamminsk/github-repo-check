import React from "react";

export const Init = ({ setCurrentStep }) => {
  const onClick = React.useCallback(() => {
    setCurrentStep("creator");
  }, []);

  return (
    <section>
      <p>Init</p>
      <button onClick={onClick}>create</button>
    </section>
  );
};
