module Household
  module Jobs
    class Company < Base
      def jid
        '3'
      end

      def name
        'Company'
      end

      def runner
        'XStocks::Stock::CompaniesJob'
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
