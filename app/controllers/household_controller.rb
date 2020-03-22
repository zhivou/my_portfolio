class HouseholdController < ApplicationController
  before_action :authenticate_user!

  def dashboard
  end

  def budget
    expenses = Expense.includes(:financial_type).all
    incomes = Income.includes(:financial_type).all
    loans = Loan.includes(:financial_type).all
    stocks = Stock.includes(:financial_type).all
    all_expenses = get_all_expenses(expenses, loans)

    gon.expenses = expenses
    gon.incomes = incomes
    gon.loans = loans
    gon.stocks = stocks
    gon.get_all_monthly_expenses = all_expenses
  end

  private
  def get_all_monthly_expenses(expenses, loans)
    gon.totalMonthlyExpenses = expenses.total_by_month + loans.total_by_month
  end
end
