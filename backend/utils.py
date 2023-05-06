from db import SessionLocal
from pydantic import BaseModel


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class ResponseModel(BaseModel):
    success: bool = False
    data: dict = []
    message: str = []

    class Config:
        orm_mode = True
