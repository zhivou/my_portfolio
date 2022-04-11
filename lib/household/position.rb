
module Household
  class Position
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
  end
end
