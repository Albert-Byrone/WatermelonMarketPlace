from pydantic import BaseModel
from typing import List, Optional
from fastapi_camelcase import CamelModel
from schemas import  Survey, ViewMentors
from utils import ResponseModel


class SurveyData(BaseModel):
    survey: Survey | None

class CreateSurveyResponse(ResponseModel):
    data: SurveyData = SurveyData()

class GetSurveyData(CamelModel):
    surveys: list[Survey] | None

class GetSurveyResponse(BaseModel):
    data: GetSurveyData = GetSurveyData()
