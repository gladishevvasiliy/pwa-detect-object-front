import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  process: {
    isLoading: false,
    error: null,
  },
  response: {}
};

const imageDetecting = createSlice({
  name: 'imageDetecting',
  initialState,
  reducers: {
    imageDetectingLoading: (state, action) => {
      state.process.isLoading = true
    },
    imageDetectingLoadingSuccess: (state, action) => {
      state.response = action.payload
      state.process.isLoading = false
    },
    imageDetectingLoadingFailed: (state, action) => {
      state.process.error = action.payload
    }
  },
});

const { actions, reducer } = imageDetecting

const {
  imageDetectingLoading,
  imageDetectingLoadingSuccess,
  imageDetectingLoadingFailed,
} = actions

export {
  reducer,
  imageDetectingLoading,
  imageDetectingLoadingSuccess,
  imageDetectingLoadingFailed,
}

