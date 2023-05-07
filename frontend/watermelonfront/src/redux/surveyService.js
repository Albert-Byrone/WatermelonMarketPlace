import axios from 'axios'

const GET_URL = 'https://watermellonbackend.onrender.com/surveys'
const POST_URL = 'https://watermellonbackend.onrender.com/survey'

const getSurveys = async () => {
    const config ={
        headers: {
         "Content-Type": "application/json",
        }
    }

    const { data } = await axios.get(GET_URL, config);
     if (data) {
        localStorage.setItem("surveys", JSON.stringify(data.data));
    }
    return data;
}

const saveSurveys = async ( survey_data) => {
    const config ={
        headers: {
         "Content-Type": "application/json",
        }
    }
    const { data } = await axios.put(POST_URL, config, survey_data);
    return data;
}

const surveyService = { getSurveys, saveSurveys};

export default surveyService;