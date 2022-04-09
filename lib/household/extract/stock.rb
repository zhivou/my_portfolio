# IEX Api
module Household
  module Extract
    class Stock
      CLIENT = IEX::Api::Client.new

      def initialize(stock_class: XStock, company_class: XCompany, dividend_class: XDividend)
        @stock_class = stock_class
        @company_class = company_class
        @dividend_class = dividend_class
      end
    end
  end
end
