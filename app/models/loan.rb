class Loan < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.total_by_month
    current.sum(:monthly_payment)
  end

  def self.loans_with_types
    find_by_sql("
      SELECT loans.*, financial_types.name
      FROM loans
      JOIN financial_types ON financial_types.id = loans.financial_type_id
    ")
  end
end
