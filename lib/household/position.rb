
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

    # TODO: Revise this one
    def self.estimate_div(position)
      shares = position.shares

      if position.x_stock.dividends.exists?
        dividends = position.x_stock.dividends.last

        shares * dividends.amount
      else
        '---'
      end
    end
  end
end
