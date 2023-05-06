from fastapi import APIRouter, Depends, Response, status
from sqlalchemy.orm import Session
from response import CreateSurveyResponse, GetSurveyResponse
from schemas import SurveyCreate
from utils import get_db
from crud import create_survey, get_surveys
from constants import SURVEY_CREATED_MESSAGE, SURVEY_NOT_CREATED_MESSAGE, GET_SURVEY_SUCCESSFUL_MESSAGE, GET_SURVEY_FAILED_MESSAGE


router = APIRouter()
post = router.post
get = router.get


@post("/survey", response_model=CreateSurveyResponse, status_code=status.HTTP_201_CREATED)
async def create_surveys(survey: SurveyCreate, response: Response, db: Session = Depends(get_db)) -> CreateSurveyResponse:
    """
    This endpoint allows the user to create a new instance of the Survey.
    This helps the user get started on the platform.
    """
    user_response =CreateSurveyResponse()
    created_survey =  create_survey(db=db, survey=survey)
    if created_survey:
        user_response.success = True
        user_response.data.survey = created_survey
        user_response.message = SURVEY_CREATED_MESSAGE
    else:
        user_response.message = SURVEY_NOT_CREATED_MESSAGE
        response.status_code = status.HTTP_400_BAD_REQUEST
    return user_response

@get('/surveys', status_code=status.HTTP_200_OK, response_model=GetSurveyResponse)
async def retrieve_surveys(response: Response,  db: Session = Depends(get_db)):
    """
        This endpoint allows the user retrieve Survey.
    """
    survey_response =GetSurveyResponse()
    surveys = get_surveys(db)
    if surveys:
        survey_response.data.surveys = surveys
    else:
        response.status_code = status.HTTP_400_BAD_REQUEST
    return survey_response


