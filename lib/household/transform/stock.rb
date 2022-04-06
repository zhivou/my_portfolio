# IEX Api
module Household
  module Transform

    class Stock
      def self.prices(model, data)
        model.update(
          volume: data.volume,
          current_price: data.open,
          prev_close_price: data.close,
          open_price: data.open,
          price_change: data.change,
          price_change_pct: data.change_percent,
          current: true
        )
      end

      def self.dividends(model, data)
      end

      def self.companies(model, data)
        model.build_x_companies(attributes = {
            name: data.company_name,
            exchange: data.exchange,
            industry: data.industry,
            website: data.website,
            description: data.description,
            ceo: data.ceo,
            security_name: data.security_name,
            sector: data.sector,
            primary_sic_code: data.security_name,
            employees: data.employees,
            tags: data.tags,
            current: true
          })
      end
    end
  end
end
