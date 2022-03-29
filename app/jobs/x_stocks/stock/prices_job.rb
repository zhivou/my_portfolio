module XStocks
  module Stock
    class PricesJob
      include Sidekiq::Worker
      sidekiq_options retry: false

      def perform()
        Household::Extract::StockPrice.new().all
      end
    end
  end
end
