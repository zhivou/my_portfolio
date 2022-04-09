class XStock < ApplicationRecord
  has_many :info, class_name: 'XCompany'
  has_many :dividends, class_name: 'XDividend'
  has_many :positions, class_name: 'XPosition'

  scope :current, -> { where(current: true) }

  def self.symb(symbol)
    current.where(symbol: symbol)
  end
end
