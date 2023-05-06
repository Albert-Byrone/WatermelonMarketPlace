import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import surveyService from './surveyService';


const surveys =JSON.parse(localStorage.getItem('surveys'))

const initialState = {
    surveys: surveys ? surveys :null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}
export const getSurveys =createAsyncThunk('surveys/all', (surveys, thunkAPI) =>{
    try{
        surveyService.getSurveys();
    }catch(error){
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
});

export const saveSurveys = createAsyncThunk(
  "/survey",
  async (survey, thunkAPI) => {
    try {
      return surveyService.saveSurveys(survey);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const surveySlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        reset: (state) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = false;
          state.jobs = null;
          state.message = "";
        },
    },
    extraReducers:(builder)=>{
        //getting surveys extraReducer
        builder.addCase(getSurveys.pending, (state) =>{
            state.isLoading = true;
        })
        builder.addCase(getSurveys.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.surveys = action.payload;
        })
        builder.addCase(getSurveys.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.surveys = null;
        })
    }
})

export const { reset } = surveySlice.actions;
export default surveySlice.reducer