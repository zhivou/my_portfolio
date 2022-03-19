module XStocks
  module Crypto
    class CryptosJob
      include Sidekiq::Worker

      def perform
      end
    end
  end
end
