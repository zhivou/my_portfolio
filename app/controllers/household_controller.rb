class HouseholdController < ApplicationController
  before_action :authenticate_user!

  def dashboard
  end

  def budget
    expenses = Expense.current.includes(:financial_type).all
    incomes = Income.current.includes(:financial_type).all
    loans = Loan.current.includes(:financial_type).all
    stocks = Stock.includes(:financial_type).all
    all_expenses = expenses.total_by_month + loans.total_by_month
    all_income = incomes.total_by_month
    total_dept = loans.total_by_month
    dti = (100 * all_expenses / all_income).round(1)

    gon.expenses = expenses.expenses_with_types
    gon.incomes = incomes.incomes_with_types
    gon.loans = loans.loans_with_types
    gon.stocks = stocks.stocks_with_types
    gon.allMonthlyExpenses = all_expenses
    gon.allMonthlyIncome = all_income
    gon.totalDept = total_dept
    gon.dti = dti

    #
    # GOOGLE CALENDAR
    #
    gon.calendarKey = ENV["GOOGLE_CALENDAR_KEY"]
    gon.calendarId = ENV["GOOGLE_CALENDAR_ID"]
    build_all_expenses
  end
end
