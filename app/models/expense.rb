class Expense < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.total_by_month
    current.sum(:monthly_payment)
  end

  def self.expenses_with_types
    find_by_sql(%(
      SELECT expenses.id, financial_types.name AS type
      FROM expenses
      JOIN financial_types ON financial_types.id = expenses.financial_type_id
    ))
  end
end
