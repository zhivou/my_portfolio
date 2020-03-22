class Income < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }

  def self.total_by_month
    current.sum(:monthly_income)
  end
end
