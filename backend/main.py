from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI Dojo Backend")

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class UserProgress(BaseModel):
    xp: int
    level: int
    streak: int

class Topic(BaseModel):
    id: str
    module_id: str
    title: str
    completed: bool

class Module(BaseModel):
    id: str
    title: str
    description: str
    progress: int

# Mock Data
MOCK_USER = UserProgress(xp=1200, level=12, streak=14)

MOCK_MODULES = [
    Module(id="ml", title="Machine Learning", description="Master algorithms", progress=45),
    Module(id="dl", title="Deep Learning", description="Neural networks", progress=10),
]

MOCK_TOPICS = [
    Topic(id="t1", module_id="ml", title="Linear Regression", completed=True),
    Topic(id="t2", module_id="ml", title="Classification", completed=False),
]

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Dojo API"}

@app.get("/user/progress", response_model=UserProgress)
def get_user_progress():
    return MOCK_USER

@app.get("/modules", response_model=List[Module])
def get_modules():
    return MOCK_MODULES

@app.get("/modules/{module_id}/topics", response_model=List[Topic])
def get_topics(module_id: str):
    topics = [t for t in MOCK_TOPICS if t.module_id == module_id]
    if not topics:
        raise HTTPException(status_code=404, detail="No topics found for this module")
    return topics

@app.post("/user/xp")
def add_xp(amount: int):
    MOCK_USER.xp += amount
    if MOCK_USER.xp > MOCK_USER.level * 100:
        MOCK_USER.level += 1
    return MOCK_USER
