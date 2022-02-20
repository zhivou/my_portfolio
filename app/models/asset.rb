class Asset < ApplicationRecord
  belongs_to :financial_type
  scope :current, -> { where(current: true) }
end
