module Household
  module XStock
    module Jobs
      class Stock < Base
        def jid
          '1'
        end

        def name
          'XStocks'
        end

        def runner
          'XStocks::Stock::PricesJob'
        end

        def description
          'Updates stock general Information by calling api'
        end

        def tags
          ['iexcloud.io', 'prices', 'stocks']
        end

        def cron
          "* * * * *"
        end
      end
    end
  end
end
