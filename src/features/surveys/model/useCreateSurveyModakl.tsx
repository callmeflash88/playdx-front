import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TextInput } from "../../../shared/ui/FormField/TextInput";

const LABEL_CLASSNAME = "font-bold text-gray-dark text-xl";
const TEXT_INPUT_CLASSNAME = " py-2";

export const CREATE_SURVEY_FORM_FIELDS = [
  {
    name: "name",
    label: "Title",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "appId",
    label: "Intellisurvey App Id",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
  {
    name: "points",
    label: "Reward Value",
    placeholder: "",
    component: TextInput,
    labelClassName: LABEL_CLASSNAME,
    fieldClassName: TEXT_INPUT_CLASSNAME,
  },
];

const CreateSurveySchema = z.object({
  name: z.string(),
  appId: z.string(),
  points: z.number(),
});

export type CreateSurveyFormValues = z.infer<typeof CreateSurveySchema>;

export const useCreateSurveyModal = () => {
  const form = useForm<CreateSurveyFormValues>({
    resolver: zodResolver(CreateSurveySchema),
    defaultValues: {
      name: "",
      appId: "",
      points: 0,
    },
  });

  const onSubmit = (data: CreateSurveyFormValues) => {
    console.log("Create campaign data:", data);
    // TODO: call mutation or API here
  };

  return {
    form,
    onSubmit,
  };
};
