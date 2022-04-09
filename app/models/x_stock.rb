class XStock < ApplicationRecord
  has_many :x_companies
  has_many :x_dividends

  scope :current, -> { where(current: true) }

  def self.symb(symbol)
    current.where(symbol: symbol)
  end
end
