import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegistrationFormState } from '../RegistrationForm.types';
import { mapToExternalCreateUser } from '../helpers';
import { UserCreationEntity } from '../../../domains';
import { UserAgentInstance } from '../../../network';

const initialState: RegistrationFormState = {
  step: 1,
  validationSchemaIndex: 0,
  isLoading: false,
  error: '',
  isSuccess: false,
};

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (data: UserCreationEntity, { rejectWithValue }) => {
    try {
      const response = await UserAgentInstance.createUser(mapToExternalCreateUser(data));
      return response;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
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
    registerReset: (state) => {
      Object.assign(state, initialState);
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
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export const { nextStep, registerReset } = registrationSlice.actions;
export default registrationSlice.reducer;
