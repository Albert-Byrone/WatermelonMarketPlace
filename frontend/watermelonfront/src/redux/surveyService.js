import axios from 'axios'

const GET_URL = 'http://127.0.0.1:8080/surveys'
const POST_URL = 'http://127.0.0.1:8080/survey'

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