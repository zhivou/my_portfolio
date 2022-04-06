# IEX Api
module Household
  module Extract
    class Stock
      CLIENT = IEX::Api::Client.new

      def initialize(stock_class: XStock, company_class: XCompany)
        @stock_class = stock_class
        @company = company_class
      end
    end
  end
end
