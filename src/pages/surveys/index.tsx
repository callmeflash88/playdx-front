import { CreateSurveyButton } from "../../features/surveys/ui/CreateSurveyButton";
import { SurveysList } from "../../widgets/surveys-list/ui/SurveysList";

export const SurveysPage = () => {
  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Surveys</h1>
          <CreateSurveyButton />
        </div>

        <SurveysList />
      </div>
    </div>
  );
};
