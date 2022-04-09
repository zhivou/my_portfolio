# IEX Api
module Household
  module Extract
    class StockDividend < Stock
      def all
        result = []
        @dividend_class.current.pluck(:symbol).each do |symbol|
          result << call(symbol)
        end
        result
      end

      def one(symbol)
        call(symbol).first
      end

      private
      def call(symbol)
        if @loader.null?
          CLIENT.dividends(symbol, '1m')
        else
          #
        end
      end
    end
  end
end
