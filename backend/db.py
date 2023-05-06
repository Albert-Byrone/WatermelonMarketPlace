import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# load env variables from .env file
load_dotenv()

# Retrieve environment variables for database configuration
username = os.environ['DATABASE_USERNAME']
database = os.environ['DATABASE_NAME']
host = os.environ['DATABASE_HOST']
password = os.environ['DATABASE_PASSWORD']
database_type = os.environ['DATABASE_TYPE']
# Add port variable with a default value of 5432 if not specified
port = os.environ.get('DATABASE_PORT', 5432)


# Create the database URL using the retrieved environment variables
db_url = f"{database_type}://{username}:{password}@{host}:{port}/{database}"


# Set up the SQLAlchemy engine
engine = create_engine(
    db_url,
)

# Configure the session factory with the created engine
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define the base class for the ORM models
Base = declarative_base()