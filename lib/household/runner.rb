Dir[__dir__ + "x_stock/jobs/*.rb"].sort.each { |file| require file }

module Household
    class Runner
      def self.all
        [
          Household::Jobs::Dividend.new,
          Household::Jobs::Stock.new,
          Household::Jobs::Company.new
        ]
        # TODO: Figure why it dosen't work.
        # XStocks::Jobs
        # .constants
        # .map { |const| XStocks::Jobs.const_get(const) }
        # .select { |klass| klass < XStocks::Jobs::Base }
        # .map(&:new)
       end
    end
end
