module XStocks
  module Stock
    class CompaniesJob
      include Sidekiq::Worker

      def perform
        puts "CompaniesJob: Working hard"
      end
    end
  end
end
