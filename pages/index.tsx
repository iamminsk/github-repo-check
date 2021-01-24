import React from "react";

import { Creator } from "../components/Creator";
import { Init } from "../components/Init";
import { Summary } from "../components/Summary";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState<
    "init" | "creator" | "summary"
  >("init");

  return (
    <>
      <main>
        {currentStep === "init" && <Init setCurrentStep={setCurrentStep} />}
        {currentStep === "creator" && (
          <Creator setCurrentStep={setCurrentStep} />
        )}
        {currentStep === "summary" && (
          <Summary setCurrentStep={setCurrentStep} />
        )}
      </main>
    </>
  );
};

export default App;
