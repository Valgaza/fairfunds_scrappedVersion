from sqlalchemy.orm import Session
from models import Expense, Income
from schemas import ExpenseCreate, IncomeCreate

def get_expenses(db: Session):
    return db.query(Expense).all()

def create_expense(db: Session, expense: ExpenseCreate):
    db_expense = Expense(**expense.dict())
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense

def get_income(db: Session):
    return db.query(Income).all()

def create_income(db: Session, income: IncomeCreate):
    db_income = Income(**income.dict())
    db.add(db_income)
    db.commit()
    db.refresh(db_income)
    return db_income
