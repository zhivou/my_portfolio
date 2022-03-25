module XStocks
  module Stock
    class DividendsJob
      include Sidekiq::Worker

      def perform
        puts "DividensJob: Working hard"
      end
    end
  end
end
