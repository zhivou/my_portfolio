class FinancialType < ApplicationRecord
  has_one :expense
  has_one :income
  has_one :loan
end
