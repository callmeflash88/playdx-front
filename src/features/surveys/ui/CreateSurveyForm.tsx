import { FormProvider } from "react-hook-form";
import Modal from "../../../shared/ui/Modal/ui";
import {
  CREATE_SURVEY_FORM_FIELDS,
  useCreateSurveyModal,
} from "../model/useCreateSurveyModakl";
import { RenderFormFields } from "../../../shared/ui/RenderFormFiled";

interface Props {
  onClose: () => void;
}

export const CreateSurveyForm = ({ onClose }: Props) => {
  const { form, onSubmit } = useCreateSurveyModal();
  return (
    <Modal onClose={onClose} isOpen title="New Survey">
      <h1>Create Survey</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <RenderFormFields fields={CREATE_SURVEY_FORM_FIELDS} />
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-transparent text-black rounded"
            >
              Cancel
            </button>
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
