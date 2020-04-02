class Stock < ApplicationRecord
  belongs_to :financial_type

  def self.stocks_with_types
    find_by_sql("
      SELECT *, financial_types.name
      FROM stocks
      LEFT JOIN financial_types ON financial_types.id = stocks.financial_type_id
      WHERE stocks.current = true
    ")
  end

  def self.calculate_total_investment
    where(current: true).sum(:price).to_f
  end

  def self.calculate_current_investment
    stocks = self.where(current: true)
    names = stocks.select(:name).group(:name).pluck(:name)
    client = IEX::Api::Client.new
    result = 0

    names.each do |n|
      if Time.now > $stock_prices[:time] + 30.minutes || !$stock_prices[n]
        $stock_prices[n] = client.quote(n).latest_price.to_f
        $stock_prices[:time] = Time.now
        $stock_prices[:will_update_at] = Time.now + 30.minutes
      end
      result += stocks.where(name: n).count * $stock_prices[n]
    end

    result
  end

  def self.shares_by_name
    where(current: true).select(:name).group(:name).pluck(:name)
  end

  def self.calculate_total_investment_by_name(name)
    where(current: true, name: name).sum(:price).to_f
  end

  def self.calculater_total_sold_by_name(name)
    where(current: false, name: name).sum(:sold_price).to_f
  end
end
