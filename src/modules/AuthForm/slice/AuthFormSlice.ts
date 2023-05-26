import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthFormState } from '../AuthForm.types';
import { UserLoginEntity } from '../../../domains';
import { UserAgentInstance } from '../../../http';

const initialState: AuthFormState = {
  isLoading: false,
  error: '',
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (data: UserLoginEntity, { rejectWithValue }) => {
    try {
      const response = await UserAgentInstance.loginUser(data);
      console.log(response);
      return response;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        // Реализовать очистку формы и переход на другую страницу после успешной аутентификации
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export default loginSlice.reducer;
