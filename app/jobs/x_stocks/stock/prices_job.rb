module XStocks
  module Stock
    class PricesJob
      include Sidekiq::Worker

      def perform
        puts "Working hard"
      end

      def name
        "Stock Prices"
      end
    end
  end
end
