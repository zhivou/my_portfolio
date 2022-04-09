# IEX Api
module Household
  module Extract
    class Iexapis < Stock
      attr_reader :data_loader

      BASE_URL = ENV['IEX_ENDPOINT']
      SECRET_TOKEN = ENV['IEX_SECRET']
      TOKEN = ENV['IEX_PUBLIC']

      def initialize(data_loader)
        @data_loader = data_loader
      end

      def company(stock)
        data_loader.get_json(company_url(stock.symbol))
      end

      def dividends_1m(stock)
        data_loader.get_json(dividends_1m_url(stock.symbol))
      end

      def historical_prices_1m(stock)
        data_loader.get_json(historical_prices_1m_url(stock.symbol))
      end

      private
      def company_url(symbol)
        "#{BASE_URL}/stock/#{symbol}/company?token=#{TOKEN}"
      end

      def dividends_1m_url(symbol)
        "#{BASE_URL}/stock/#{symbol}/dividends/1m?token=#{TOKEN}"
      end

      def dividends_3m_url(symbol)
        "#{BASE_URL}/stock/#{symbol}/dividends/3m?token=#{TOKEN}"
      end

      def dividends_6m_url(symbol)
        "#{BASE_URL}/stock/#{symbol}/dividends/6m?token=#{TOKEN}"
      end

      def historical_prices_1m_url(symbol)
        "#{BASE_URL}/stock/#{symbol}/chart/1m?token=#{TOKEN}"
      end
    end
  end
end
