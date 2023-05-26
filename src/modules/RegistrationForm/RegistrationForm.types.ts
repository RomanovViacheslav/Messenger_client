export interface RegistrationFormState {
  step: number;
  validationSchemaIndex: number;
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
}
