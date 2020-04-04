class HouseholdController < ApplicationController
  before_action :authenticate_user!

  def dashboard
  end

  def budget
    expenses = Expense.includes(:financial_type)
    incomes = Income.includes(:financial_type)
    loans = Loan.includes(:financial_type)
    stocks = Stock.includes(:financial_type)
    all_expenses = (expenses.total_by_month + loans.total_by_month).to_i
    all_income = incomes.total_by_month.to_i
    total_dept = loans.total_by_month.to_i
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

  def stock
    stock = Stock.all

    gon.totalOriginalInvestments = stock.calculate_total_investment
    gon.totalCurrentInvestments = stock.calculate_current_investment
    gon.shareInfo = stock.get_share_info_by_names
    gon.totalActive = stock.current.length
    gon.totalSold = stock.sold.length
    gon.purchaseHistory = stock.purchase_history.to_hash
  end
end
