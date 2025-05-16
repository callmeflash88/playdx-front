// features/create-campaign/model/useCreateCampaignForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextInput } from "../../../shared/ui/FormField/TextInput";
import { createSurvey } from "../../../shared/api/surveysApi";
import { useMutation } from "@tanstack/react-query";

const LABEL_CLASSNAME = "font-bold text-gray-dark text-xl";
const TEXT_INPUT_CLASSNAME = " py-2";

export const CREATE_CAPAIGN_FORM_FIELDS = [
  {
    name: "title",
    label: "Campaign name",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "intellisurvey_id",
    label: "Intellisurvey ID",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "reward_value",
    label: "Points Granted",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
];

//      Zod
const CreateCampaignSchema = z.object({
  title: z.string().min(1, "Campaign name is required"),
  intellisurvey_id: z.string().min(1, "Intellisurvey is required"),
  reward_value: z.string().min(1, "Points must be positive"),
});

export type CreateCampaignFormValues = z.infer<typeof CreateCampaignSchema>;

export const useCreateCampaignForm = () => {
  const form = useForm<CreateCampaignFormValues>({
    resolver: zodResolver(CreateCampaignSchema),
    defaultValues: {
      title: "",
      intellisurvey_id: "",
      reward_value: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createSurvey,
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: CreateCampaignFormValues) => {
    await mutation.mutateAsync(data);
  };

  return {
    form,
    onSubmit,
    isSubmitting: mutation.isPending, //
  };
};
