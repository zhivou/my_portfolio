class Income < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.total_by_month
    current.sum(:monthly_income)
  end

  def self.incomes_with_types
    find_by_sql("
      SELECT *, financial_types.name
      FROM incomes
      JOIN financial_types ON financial_types.id = incomes.financial_type_id
    ")
  end
end
