class Expense < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.total_by_month
    current.sum(:monthly_payment)
  end

  def self.expenses_with_types
    find_by_sql(%(
      SELECT expenses.id, expenses.name as exp_name, expenses.monthly_payment, expenses.year_amount, expenses.current, expenses.notes, financial_types.name
      FROM expenses
      JOIN financial_types ON financial_types.id = expenses.financial_type_id
    ))
  end
end
