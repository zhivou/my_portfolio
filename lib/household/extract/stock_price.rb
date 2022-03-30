# IEX Api
module Household
  module Extract
    class StockPrice
      CLIENT = IEX::Api::Client.new

      def initialize(stock_class: XStock)
        @stock_class = stock_class
      end

      def all
        @stock_class.current.pluck(:symbol).each do |s|
          puts CLIENT.historical_prices(s, {range: '5d'}).inspect
        end
      end
    end
  end
end
