import { configureStore } from '@reduxjs/toolkit'
import surveySlice from './redux/surveySlice'

export const store = configureStore({
  reducer: {
    surveys: surveySlice
  },
})