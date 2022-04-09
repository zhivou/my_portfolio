class XPosition < ApplicationRecord
  belongs_to :x_stock
  belongs_to :x_crypto

  scope :current, -> { where(current: true) }
end
