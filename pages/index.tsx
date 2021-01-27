import React from "react";

import { Creator } from "../components/Creator";
import { Init } from "../components/Init";
import { Summary } from "../components/Summary";

export interface FormData {
  user: string;
  repoName: string;
  bgColor: string;
}

export type CurrentStep = "init" | "creator" | "summary";

const App = () => {
  const [formData, setFormData] = React.useState<FormData | null>(null);
  const [currentStep, setCurrentStep] = React.useState<CurrentStep>("init");

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
