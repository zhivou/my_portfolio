class HouseholdController < ApplicationController
  before_action :authenticate_user!

  def dashboard
  end

  def budget
    gon.expenses = Expense.includes(:financial_type).all
    gon.incomes = Income.includes(:financial_type).all
    gon.loans = Loan.includes(:financial_type).all
    gon.stocks = Stock.includes(:financial_type).all
  end
end
