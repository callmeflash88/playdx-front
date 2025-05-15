import { SurveyCard } from "../../../entities/surveys/ui/SurveyCard";
import { useSurveys } from "../model/useSurveys";

export const SurveysList = () => {
  const { surveys } = useSurveys();

  //   if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {surveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey} />
      ))}
    </div>
  );
};
