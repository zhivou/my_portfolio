# IEX Api
module Household
  module Extract
    class StockCompany < Stock
      def all
        result = []
        @company.current.pluck(:symbol).each do |symbol|
          result << call(symbol)
        end
        result
      end

      def one(symbol)
        call(symbol)
      end

      private
      def call(symbol)
        CLIENT.company(symbol).inspect
      end
    end
  end
end
