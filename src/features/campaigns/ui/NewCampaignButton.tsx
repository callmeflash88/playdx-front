import { Sizes } from "../../../shared/types/sizes";
import { Button } from "../../../shared/ui/Button";
import { ButtonVariants } from "../../../shared/ui/Button/types";
import { CreateCampaignModal } from "../../create-campaigns/ui/CreateCampaignModal";
import { useModal } from "../models/useModal";

export const NewCampaignButton = () => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button variant={ButtonVariants.SECONDARY} size={Sizes.M} onClick={open}>
        New Campaign
      </Button>
      {isOpen && <CreateCampaignModal onClose={close} />}
    </>
  );
};
