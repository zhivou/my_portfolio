class XPosition < ApplicationRecord
  belongs_to :x_stocks
  belongs_to :x_cryptos

  scope :current, -> { where(current: true) }
end
