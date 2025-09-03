from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .email_parser import parse_email_header

app = FastAPI()

class EmailHeader(BaseModel):
    header: str

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/analyze")
def analyze_email(email: EmailHeader):
    try:
        result = parse_email_header(email.header)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
