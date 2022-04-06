class XStock < ApplicationRecord
  has_many :x_companies

  scope :current, -> { where(current: true) }

  def self.symb(symbol)
    current.where(symbol: symbol)
  end
end
