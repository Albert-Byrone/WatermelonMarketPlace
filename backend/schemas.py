from pydantic import BaseModel, EmailStr
from fastapi_camelcase import CamelModel


class SurveyBase(CamelModel):
    name: str
    balance: str
    price: str
    network: str
    address: str
    email: EmailStr

class SurveyCreate(SurveyBase):
    pass


class Survey(SurveyBase):
    id: int

    class Config:
        orm_mode = True


class ViewMentors(SurveyBase):
    id: int
    class Config:
        orm_mode = True
