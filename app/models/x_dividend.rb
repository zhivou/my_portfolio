class XDividend < ApplicationRecord
  belongs_to :x_stock

  scope :current, -> { where(current: true) }
end
