import { useSurveys } from "../../../entities/surveys/model/useSurveys";
import { SurveyCard } from "../../../entities/surveys/ui/SurveyCard";

export const SurveysList = () => {
  const { data: surveys } = useSurveys();
  console.log("Data:", surveys?.data);

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {surveys &&
        surveys.data.map((survey) => (
          <SurveyCard key={survey.id} survey={survey} />
        ))}
      {/* {surveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey} />
      ))} */}
    </div>
  );
};
