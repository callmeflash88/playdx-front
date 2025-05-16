// features/create-campaign/ui/CreateCampaignModal.tsx

import { FormProvider } from "react-hook-form";
import Modal from "../../../shared/ui/Modal/ui";
import { RenderFormFields } from "../../../shared/ui/RenderFormFiled";
import {
  CREATE_CAPAIGN_FORM_FIELDS,
  useCreateCampaignForm,
} from "../model/useCreateCampaignModal";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  onClose: () => void;
}

export const CreateCampaignModal = ({ onClose }: Props) => {
  const queryClient = useQueryClient();
  const { form, onSubmit, isSubmitting } = useCreateCampaignForm();

  const handleSubmit = async (data: any) => {
    await onSubmit(data);
    onClose();
    queryClient.invalidateQueries({ queryKey: ["surveys"] });
  };

  return (
    <Modal onClose={onClose} isOpen title="Create New Campaign">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <RenderFormFields fields={CREATE_CAPAIGN_FORM_FIELDS} />
          <div className="flex justify-center gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};
