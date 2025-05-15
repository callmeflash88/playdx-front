// features/create-campaign/ui/CreateCampaignModal.tsx

import { FormProvider } from "react-hook-form";
import Modal from "../../../shared/ui/Modal/ui";
import { RenderFormFields } from "../../../shared/ui/RenderFormFiled";
import {
  CREATE_CAPAIGN_FORM_FIELDS,
  useCreateCampaignForm,
} from "../model/useCreateCampaignModal";

interface Props {
  onClose: () => void;
}

export const CreateCampaignModal = ({ onClose }: Props) => {
  const { form, onSubmit } = useCreateCampaignForm();

  return (
    <Modal onClose={onClose} isOpen title="Create New Campaign">
      <h1>Create campaign</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <RenderFormFields fields={CREATE_CAPAIGN_FORM_FIELDS} />
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Create
            </button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
