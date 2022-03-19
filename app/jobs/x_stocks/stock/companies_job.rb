module XStocks
  module Stock
    class CompaniesJob
      include Sidekiq::Worker

      def perform
      end
    end
  end
end
