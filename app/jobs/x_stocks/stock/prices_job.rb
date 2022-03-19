module XStocks
  module Stock
    class PricesJob
      include Sidekiq::Worker

      def perform
      end
    end
  end
end
