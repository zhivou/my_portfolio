module XStocks
  module Stock
    class DividensJob
      include Sidekiq::Worker

      def perform
      end
    end
  end
end
