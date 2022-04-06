class XCompany < ApplicationRecord
  belongs_to :x_stocks

  scope :current, -> { where(current: true) }
end
