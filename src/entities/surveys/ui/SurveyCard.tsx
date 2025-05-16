import { useNavigate } from "react-router-dom";
import type { Survey } from "../model/types";

interface Props {
  survey: Survey;
}

export const SurveyCard = ({ survey }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/surveys/${survey.id}`)}
      className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900">{survey.title}</h3>
          <span className="text-lg font-semibold text-gray-900">
            {survey.reward_value}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{survey.intellisurvey_id}</span>
          <span className="uppercase">{survey.points_awarded}</span>
        </div>
      </div>
    </div>
  );
};
