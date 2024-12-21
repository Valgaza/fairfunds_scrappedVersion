from pydantic import BaseModel
from datetime import date

class ExpenseBase(BaseModel):
    item: str
    amount: float
    date: date
    category: str
    description: str | None

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: int

    class Config:
        orm_mode = True

class IncomeBase(BaseModel):
    amount: float
    date: date
    description: str | None

class IncomeCreate(IncomeBase):
    pass

class Income(IncomeBase):
    id: int

    class Config:
        orm_mode = True
