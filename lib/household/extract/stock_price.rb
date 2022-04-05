# IEX Api
module Household
  module Extract
    class StockPrice < Stock
      def all
        result = []
        @stock_class.current.pluck(:symbol).each do |symbol|
          result << call(symbol)
        end
        result
      end

      def one(symbol)
        call(symbol)
      end

      private
      def call(symbol)
        CLIENT.historical_prices(symbol, {range: '5d'}).inspect
      end
    end
  end
end
