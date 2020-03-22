class HouseholdController < ApplicationController
  before_action :authenticate_user!

  def dashboard
  end

  def budget
    expenses = Expense.includes(:financial_type).all
    incomes = Income.includes(:financial_type).all
    loans = Loan.includes(:financial_type).all
    stocks = Stock.includes(:financial_type).all
    all_expenses = get_all_monthly_expenses(expenses, loans)
    all_income = get_all_monthly_income(incomes)

    gon.expenses = expenses
    gon.incomes = incomes
    gon.loans = loans
    gon.stocks = stocks
  end

  private
  def get_all_monthly_expenses(expenses, loans)
    gon.totalMonthlyExpenses = expenses.total_by_month + loans.total_by_month
  end

  ##
  # TODO: Add dividends later when stock api is in place
  #
  def get_all_monthly_income(incomes)
    gon.totalMonthlyIncome = incomes.total_by_month
  end
end
