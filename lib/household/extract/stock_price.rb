# IEX Api
module Household
  module Extract
    class StockPrice
      def initialize(stock_class: XStock)
        @data_loader = Household::IexLoader.new
        @stock_class = stock_class
      end

      def all
        puts @stock_class.current.inspect
      end
    end
  end
end
