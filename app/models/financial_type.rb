class FinancialType < ApplicationRecord
  has_one :expense
  has_one :income
end
