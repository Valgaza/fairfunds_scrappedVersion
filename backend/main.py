from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base
from schemas import ExpenseCreate, IncomeCreate
import crud

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/v1/expenses", response_model=list[ExpenseCreate])
def read_expenses(db: Session = Depends(get_db)):
    return crud.get_expenses(db)

@app.post("/api/v1/expenses", response_model=ExpenseCreate)
def create_expense(expense: ExpenseCreate, db: Session = Depends(get_db)):
    return crud.create_expense(db, expense)

@app.get("/api/v1/income", response_model=list[IncomeCreate])
def read_income(db: Session = Depends(get_db)):
    return crud.get_income(db)

@app.post("/api/v1/income", response_model=IncomeCreate)
def create_income(income: IncomeCreate, db: Session = Depends(get_db)):
    return crud.create_income(db, income)
