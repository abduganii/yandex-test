import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Steps } from "antd";

import { StepArray } from "../../data";

import ContainerMin from "../../ui/container/min-container";
import GlobalForm from "../../ui/form/global-form";
import NameSection from "./ui/name-section";
import WorkingTimeSection from "./ui/working-time-section";
import LocationSection from "./ui/location-section";
import LinksSection from "./ui/links-section";
import ImageSection from "./ui/image-section";
import FullNameSection from "./ui/full-name-section";
import CategorySection from "./ui/category-section";
import AboutSection from "./ui/about-section";
import SptepRespons from "../../ui/step-respons";

const stepsComponents = [
  NameSection,
  ImageSection,
  LocationSection,
  CategorySection,
  WorkingTimeSection,
  LinksSection,
  AboutSection,
  FullNameSection
];
export default function HomePage() {
  const [step, setSteps] = useState(0);
  const [type, setType] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    reset,
    watch,
    trigger,
    formState: { errors }
  } = useForm();
  const watchedFiles = watch();

  const checkValidation = async () => {
    if (step == 0) {
      const result = await trigger("name"); // 'myInput' is the name of the field to validate
      return result;
    }
    if (step == 5) {
      const website = watchedFiles.website ? await trigger("website") : true;
      const instagram = watchedFiles.instagram
        ? await trigger("instagram")
        : true;
      const telegram = watchedFiles.telegram ? await trigger("telegram") : true;
      const telegram_bot = watchedFiles.telegram_bot
        ? await trigger("telegram_bot")
        : true;
      const facebook = watchedFiles.facebook ? await trigger("facebook") : true;
      const twitter = watchedFiles.twitter ? await trigger("twitter") : true;
      const youtube = watchedFiles.youtube ? await trigger("youtube") : true;

      return (
        website &&
        instagram &&
        telegram &&
        telegram_bot &&
        facebook &&
        twitter & youtube
      );
    }
    return true;
  };

  return (
    <ContainerMin>
      <div className={"mb-[32px] hidden md:block"}>
        <Steps current={step} labelPlacement="vertical" items={StepArray} />
      </div>

      <SptepRespons
        step={step}
        setStep={setSteps}
        isValidStep={checkValidation}
        stepArr={StepArray}
        type={type}
        setType={setType}
      />
      <GlobalForm
        url={"new-place/"} // url to send date "api"
        handleSubmit={handleSubmit} // form send date function "api"
        title={StepArray[step].title}
        info={StepArray[step]?.info}
        setSteps={setSteps}
        step={step}
        reset={reset}
        isValidStep={checkValidation}
        type={type}
        setType={setType}
        maxStepLength={StepArray?.length}
      >
        {React.createElement(stepsComponents[step], {
          register,
          setValue,
          getValues,
          watchedFiles,
          errors,
          setError
        })}
        {stepsComponents[step]}
      </GlobalForm>
    </ContainerMin>
  );
}
