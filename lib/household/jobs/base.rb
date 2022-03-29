module Household
  module Jobs
    class Base
      def perform
        Sidekiq::Cron::Job.new(name: name, cron: cron, class: runner)
      end

      def find
        Sidekiq::Cron::Job.find(name)
      end

      def destroy
        Sidekiq::Cron::Job.destroy(name)
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
