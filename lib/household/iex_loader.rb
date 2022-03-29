module Household
  class IexLoader
    CLIENT = IEX::Api::Client.new

    def initialize
      raise "Secret token is required for StockPrice Job" unless client_ok?
      @client = CLIENT
    end

    private
    def client_ok?
      return true if CLIENT.secret_token
      false
    end
  end
end
