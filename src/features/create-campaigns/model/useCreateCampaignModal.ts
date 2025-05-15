// features/create-campaign/model/useCreateCampaignForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextInput } from "../../../shared/ui/FormField/TextInput";

const LABEL_CLASSNAME = "font-bold text-gray-dark text-xl";
const TEXT_INPUT_CLASSNAME = " py-2";

export const CREATE_CAPAIGN_FORM_FIELDS = [
  {
    name: "name",
    label: "Campaign name",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "appId",
    label: "Intellisurvey ID",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "points",
    label: "Points Granted",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
];

// Определяем схему валидации с помощью Zod
const CreateCampaignSchema = z.object({
  title: z.string().min(1, "Campaign name is required"),
  appId: z.string().min(1, "Intellisurvey is required"),
  pointsToBeAwarded: z.number().min(1, "Points must be positive"),
});

export type CreateCampaignFormValues = z.infer<typeof CreateCampaignSchema>;

export const useCreateCampaignForm = () => {
  const form = useForm<CreateCampaignFormValues>({
    resolver: zodResolver(CreateCampaignSchema),
    defaultValues: {
      title: "",
      appId: "",
      pointsToBeAwarded: 0,
    },
  });

  const onSubmit = (data: CreateCampaignFormValues) => {
    console.log("Create campaign data:", data);
    // TODO: call mutation or API here
  };

  return {
    form,
    onSubmit,
  };
};
