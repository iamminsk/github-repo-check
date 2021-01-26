import React from "react";

import { Creator } from "../components/Creator";
import { Init } from "../components/Init";
import { Summary } from "../components/Summary";

const App = () => {
  const [formData, setFormData] = React.useState<{
    user: string;
    repoName: string;
    bgColor: string;
  } | null>(null);
  const [currentStep, setCurrentStep] = React.useState<
    "init" | "creator" | "summary"
  >("init");

  return (
    <>
      <main>
        {currentStep === "init" && <Init setCurrentStep={setCurrentStep} />}
        {currentStep === "creator" && (
          <Creator setCurrentStep={setCurrentStep} setFormData={setFormData} />
        )}
        {currentStep === "summary" && (
          <Summary setCurrentStep={setCurrentStep} formData={formData} />
        )}
      </main>
    </>
  );
};

export default App;
