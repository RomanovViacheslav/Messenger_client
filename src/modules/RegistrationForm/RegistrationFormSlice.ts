import { createSlice } from '@reduxjs/toolkit';
import { initialValues } from './RegistrationForm.constants';
import { RegistrationFormState } from './RegistrationForm.types';
import { validationSchemas } from './helpers';

const initialState: RegistrationFormState = {
  step: 1,
  validationSchemaIndex: 0,
  isLoading: false,
  error: '',
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
      state.validationSchemaIndex += 1;
    },
  },
});

export const { nextStep } = registrationSlice.actions;
export default registrationSlice.reducer;
