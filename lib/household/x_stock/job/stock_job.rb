module Household
  module XStock
    module Job
      class StockJob
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

        def perform
          Sidekiq::Cron::Job.new(name: name, cron: cron, class: runner)
        end

        def find
          Sidekiq::Cron::Job.find(name)
        end

        def status
          if find.name == name
            "Enabled"
          else
            "Disabled"
          end
        end
      end
    end
  end
end
