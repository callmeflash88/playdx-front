import { useModal } from "../model/useModal";
import { Button } from "../../../shared/ui/Button";
import { ButtonVariants } from "../../../shared/ui/Button/types";
import { Sizes } from "../../../shared/types/sizes";

import { CreateCampaignModal } from "../../create-campaigns/ui/CreateCampaignModal";

export const CreateSurveyButton = () => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button
        variant={ButtonVariants.SECONDARY}
        size={Sizes.M}
        onClick={open}
        className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        New Survey
      </Button>
      {/* {isOpen && <CreateSurveyForm onClose={close} />} */}
      {isOpen && <CreateCampaignModal onClose={close} />}
    </>
  );
};
