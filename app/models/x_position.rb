class XPosition < ApplicationRecord
  belongs_to :x_stock, optional: true
  belongs_to :x_crypto, optional: true

  validates_associated :x_stock
  validates_associated :x_crypto

  scope :current, -> { where(current: true) }
end
