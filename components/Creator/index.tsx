import React from "react";

export const Creator = ({ setCurrentStep }) => {
  const onClick = React.useCallback(() => {
    setCurrentStep("summary");
  }, []);

  return (
    <section>
      <p>Creator</p>
      <button onClick={onClick}>get url</button>
    </section>
  );
};
