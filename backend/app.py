import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse



# Conditional import due to pytest which imports tests as external packages.
if __name__ == "__main__" or __name__ == "main":
    from route import router as survey_router
    from db import Base, engine
else:
    from route import router as survey_router
    from db import Base, engine

Base.metadata.create_all(bind=engine)
app = FastAPI()

# Add CORS middleware to allow all origins, methods, and headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(survey_router)
get = app.get

@get('/')
async def homepage():
    """
    This is the api's home page.
    It currently redirects to the swagger docs.
    """
    return RedirectResponse('/redoc')

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)
