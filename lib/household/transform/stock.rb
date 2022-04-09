# IEX Api
module Household
  module Transform

    class Stock
      def self.prices(model, data)
        log_me { puts "33% - Loading prices data..." }
        model.volume = data['volume']
        model.current_price = data['open']
        model.prev_close_price = data['close']
        model.open_price = data['uOpen']
        model.price_change = data['change']
        model.price_change_pct = data['change_percent']
        model.current = true
      end

      def self.dividends(model, data)
        log_me { puts "99% - Loading dividends data..." }
        data.each do |d|
          model.x_dividends.build(
            amount: d['amount'],
            currency: d['currency'],
            declared_date: d['declaredDate'],
            description: d['description'],
            ex_date: d['exDate'],
            frequency: d['frequency'],
            payment_date: d['paymentDate'],
            record_date: d['recordDate'],
            refid: d['refid'],
            divid: d['id'],
            divkey: d['key'],
            subkey: d['subkey'],
            market_date: Time.at(d['date']).to_date,
            marker_updated: Time.at(d['updated']).to_date,
            current: true
          )
        end
      end

      def self.company(model, data)
        log_me { puts "66% - Loading company information data..." }
        model.x_companies.build(
            name: data['company_name'],
            exchange: data['exchange'],
            industry: data['industry'],
            website: data['website'],
            description: data['description'],
            ceo: data['ceo'],
            security_name: data['security_name'],
            sector: data['sector'],
            primary_sic_code: data['security_name'],
            employees: data['employees'],
            tags: data['tags'],
            current: true
          )
      end

      private
      def self.log_me
        yield
        puts "==================="
      end
    end
  end
end
