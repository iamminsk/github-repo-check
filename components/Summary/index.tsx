import React from "react";

export const Summary = ({ setCurrentStep }) => {
  const onClick = React.useCallback(() => {
    setCurrentStep("creator");
  }, []);

  return (
    <section>
      <p>Summary</p>
      <button onClick={onClick}>create new</button>
    </section>
  );
};
