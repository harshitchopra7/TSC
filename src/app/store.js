import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});