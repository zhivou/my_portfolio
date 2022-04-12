
module Household
  class Position
    FREQUENCY = {
      every_35: 10.4,
      annual: 1,
      quarterly: 4,
      monthly: 12
    }

    def self.gain_loss(position)
      market_value = (position.shares * position.x_stock.current_price)
      purchased_value = position.total_cost
      (market_value - purchased_value).round(2)
    end

    def self.gain_loss_pct(position)
      market_value = (position.shares * position.x_stock.current_price)
      purchased_value = position.total_cost
      total = market_value - purchased_value
      ((total * 100) / purchased_value).round(2)
    end

    def self.yield_div(position)
      shares = position.shares

      if position.x_stock.dividends.exists?
        dividends = position.x_stock.dividends.last
        frequency = dividends.frequency
        price = position.x_stock.current_price

        (((dividends.amount * FREQUENCY[frequency.to_sym]) / price) * 100).round(2)
      end
    end

    def self.estimated_income(position)
      div_prc = self.yield_div(position)
      market_value = position.shares * position.x_stock.current_price
      (market_value * (div_prc / 100 )).round(2) unless div_prc.nil?
    end
  end
end
