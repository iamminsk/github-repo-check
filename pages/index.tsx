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

const App = ({ host }) => {
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
          <Summary
            setCurrentStep={setCurrentStep}
            formData={formData}
            host={host}
          />
        )}
      </main>
    </>
  );
};

export default App;

export async function getServerSideProps(context) {
  const { req } = context;
  let host;
  if (req) {
    host = req.headers.host;
  }

  return {
    props: { host },
  };
}
