import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { log } from 'console';
import { RegistrationFormState } from '../RegistrationForm.types';
import { UserAgentInstance } from '../../../http';
import { mapToExternalCreateUser } from '../helpers';
import { UserCreationEntity } from '../../../domains';

const initialState: RegistrationFormState = {
  step: 1,
  validationSchemaIndex: 0,
  isLoading: false,
  error: '',
};

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (data: UserCreationEntity) => {
    try {
      const response = await UserAgentInstance.createUser(mapToExternalCreateUser(data));
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);

      throw new Error('error.message');
    }
  },
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
      state.validationSchemaIndex += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        // Реализовать очистку формы и переход на другую страницу после успешной регистрации
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        // доработать ошибку
        state.error = 'ошибка';
      });
  },
});

export const { nextStep } = registrationSlice.actions;
export default registrationSlice.reducer;
