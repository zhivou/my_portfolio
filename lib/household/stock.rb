module Household
  class Stock
    def self.create_new(symbol)
      stock = XStock.new
      stock.symbol = symbol

      loader = Household::DataLoader.new
      prices = Household::Extract::Iexapis.new(loader).historical_prices_1m(stock)
      company = Household::Extract::Iexapis.new(loader).company(stock)
      dividends = Household::Extract::Iexapis.new(loader).dividends_6m(stock)

      Household::Transform::Stock.prices(stock, prices.first)
      Household::Transform::Stock.company(stock, company)
      Household::Transform::Stock.dividends(stock, dividends)

      stock.save
    end
  end
end
