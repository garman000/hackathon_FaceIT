import { useState } from "react";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";

import Personal from "../components/steps/Personal";
import Health from "../components/steps/Health";
import Fitness from "../components/steps/Fitness";
import Final from "../components/steps/Final";

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Personal",
    "Health",
    "Fitness",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Personal />;
      case 2:
        return <Health />;
      case 3:
        return <Fitness />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Form;
