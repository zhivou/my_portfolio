module XStocks
  module Stock
    class PricesJob
      include Sidekiq::Worker

      def perform
        puts "PricesJob: Working hard"
      end
    end
  end
end
