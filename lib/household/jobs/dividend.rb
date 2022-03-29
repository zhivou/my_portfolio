module Household
  module Jobs
    class Dividend < Base
      def jid
        '2'
      end

      def name
        'Dividends'
      end

      def runner
        'XStocks::Stock::DividendsJob'
      end

      def description
        'Calls API to populate divideds jobs'
      end

      def tags
        ['iexcloud.io', 'dividends', 'stocks']
      end

      def cron
        "* * * * *"
      end
    end
  end
end
