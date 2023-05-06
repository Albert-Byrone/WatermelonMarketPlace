def create_survey(db: Session, survey: SurveyCreate):
    db_survey = Survey(name=survey.name, price=survey.price, balance=survey.balance, network=survey.network, address=survey.address, email=survey.email)
    db.add(db_survey)
    db.commit()
    db.refresh(db_survey)
    return db_survey

