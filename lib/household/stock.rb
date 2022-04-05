module Household
  class Stock
    def self.create_new(symbol)
      stock = XStock.new
      prices = Household::Extract::StockPrice.new.one(symbol)
      company = Household::Extract::StockCompany.new.one(symbol)
      puts company.inspect
    end
  end
end
