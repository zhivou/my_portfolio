class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  $stock_prices = { time: Time.now}
end
