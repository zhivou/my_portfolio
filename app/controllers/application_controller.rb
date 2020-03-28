class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :admin_flag

  include DefaultPageContent
  include ProfileContent

  protected

  ##
  # This is for devise strong parameters
  #
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
        :first_name,
        :last_name,
        :title,
        :about,
        :avatar_image
    ])
  end

  def admin_flag
    gon.admin_flag = user_signed_in?
  end

  ##
  # This is a data helper for total expenses UI table for Budget app.
  #
  def build_all_expenses
    expenses = Expense.includes(:financial_type).current.all
    loans = Loan.includes(:financial_type).current.all
    result = []

    expenses.each do |e|
      holder = {}
      holder[:expense_id] = e.id
      holder[:name] = e.name
      holder[:monthly_payment] = e.monthly_payment
      holder[:financial_type] = e.financial_type.name
      holder[:notes] = e.notes
      result << holder
    end

    loans.each do |l|
      holder = {}
      holder[:loan_id] = l.id
      holder[:name] = l.org_name
      holder[:monthly_payment] = l.monthly_payment
      holder[:financial_type] = l.financial_type.name
      holder[:notes] = l.notes
      result << holder
    end

    gon.totalExpenses = result
  end
end
