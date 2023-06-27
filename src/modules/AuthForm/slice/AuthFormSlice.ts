import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthFormState } from '../AuthForm.types';
import { UserLoginEntity } from '../../../domains';
import { USER_LOCALSTORAGE_KEY } from '../../../shared/constants';
import { tokenActions } from '../../../shared';
import { UserAgentInstance } from '../../../network';

const initialState: AuthFormState = {
  isLoading: false,

  error: '',
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (data: UserLoginEntity, { dispatch }) => {
    try {
      const response = await UserAgentInstance.loginUser(data);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.jwt);
      dispatch(tokenActions.setAuth());
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
  reducers: {
    loginReset: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'Ошибка';
      });
  },
});

export default loginSlice.reducer;
