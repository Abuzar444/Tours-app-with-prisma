"use client";

import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useFormState(action, initialState);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
