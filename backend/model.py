from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declared_attr
from sqlalchemy_utils import Timestamp, EmailType

from db import Base


class AbstractBaseModel(Base, Timestamp):
    __abstract__ = True

    @declared_attr
    def id(cls):
        return Column(Integer, primary_key=True, index=True)


class Survey(AbstractBaseModel):
    __tablename__= "surveys"

    name = Column(String(255))
    balance = Column(String(255))
    price = Column(String(255))
    network = Column(String(255))
    address = Column(String(255))
    email = Column(EmailType)
