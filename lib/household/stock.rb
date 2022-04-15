module Household
  class Stock
    def self.create_new(stock)
      loader = Household::DataLoader.new
      iex_client = Household::Extract::Iexapis.new(loader)

      prices = iex_client.historical_prices_1m(stock)
      company = iex_client.company(stock)
      dividends = iex_client.dividends_6m(stock)

      Household::Transform::Stock.prices(stock, prices.first)
      Household::Transform::Stock.company(stock, company)
      Household::Transform::Stock.dividends(stock, dividends)

      stock
    end
  end
end
