module XStocks
  module Crypto
    class ProjectsJob
      include Sidekiq::Worker

      def perform
      end
    end
  end
end
