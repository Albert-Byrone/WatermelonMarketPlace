from sqlalchemy.orm import Session
from model import  Survey
from schemas import SurveyCreate


def create_survey(db: Session, survey: SurveyCreate):
    db_survey = Survey(name=survey.name, price=survey.price, balance=survey.balance, network=survey.network, address=survey.address, email=survey.email)
    db.add(db_survey)
    db.commit()
    db.refresh(db_survey)
    return db_survey


def get_surveys(db: Session):
    surveys = db.query(Survey).all()
    return [Survey( id=survey.id, name=survey.name,price=survey.price,balance=survey.balance, network=survey.network,address=survey.address,email=survey.email)for survey in surveys]
