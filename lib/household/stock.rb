module Household
  class Stock
    def self.create_new(symbol)
      stock = XStock.new
      stock.update(symbol: symbol)

      prices = Household::Extract::StockPrice.new.one(symbol)
      company = Household::Extract::StockCompany.new.one(symbol)

      Household::Transform::Stock.prices(stock, prices)
      Household::Transform::Stock.companies(stock, company)

      stock.save!
    end
  end
end
