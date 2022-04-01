class XStock < ApplicationRecord
  scope :current, -> { where(current: true) }

  def self.symb(symbol)
    current.where(symbol: symbol)
  end
end
