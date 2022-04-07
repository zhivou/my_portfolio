class CreateXTables < ActiveRecord::Migration[6.1]
  def change
    ##
    # USE coinpaprika
    # GET https://api.coinpaprika.com/v1/tickers/btc-bitcoin
    create_table    :x_cryptos do |t|
      t.string      :symbol, null: false

      t.decimal     :current_price, precision: 10, scale: 2
      t.decimal     :volume, precision: 10, scale: 2
      t.integer     :rank
      t.integer     :total_supply
      t.integer     :circulating_supply
      t.integer     :max_supply
      t.decimal     :market_cap, precision: 10, scale: 2
      t.decimal     :price_1h_percentage_change, precision: 10, scale: 2
      t.decimal     :price_24h_percentage_change, precision: 10, scale: 2
      t.decimal     :price_7d_percentage_change, precision: 10, scale: 2
      t.decimal     :price_30d_percentage_change, precision: 10, scale: 2
      t.decimal     :price_3m_percentage_change, precision: 10, scale: 2
      t.decimal     :price_1y_percentage_change, precision: 10, scale: 2
      t.decimal     :price_5y_percentage_change, precision: 10, scale: 2
      t.decimal     :all_time_high_price, precision: 10, scale: 2
      t.decimal     :all_time_high_percentage_drop, precision: 10, scale: 2
      t.decimal     :all_time_high_date, precision: 10, scale: 2
      t.decimal     :untrusted_volume, precision: 10, scale: 2

      t.boolean     :current
      t.timestamps
    end

    ##
    # https://iexcloud.io/docs/api/#historical-prices
    # GET /stock/{symbol}/chart/{range}/{date}
    create_table    :x_stocks do |t|
      t.string      :symbol, null: false
      t.decimal     :volume, precision: 16, scale: 0

      t.decimal     :current_price, precision: 10, scale: 2
      t.decimal     :prev_close_price, precision: 10, scale: 2
      t.decimal     :open_price, precision: 10, scale: 2
      t.decimal     :day_low_price, precision: 10, scale: 2
      t.decimal     :day_high_price, precision: 10, scale: 2
      t.decimal     :price_change, precision: 10, scale: 2
      t.decimal     :price_change_pct, precision: 10, scale: 2

      t.decimal     :week_52_high, precision: 10, scale: 2
      t.date        :week_52_high_date
      t.decimal     :week_52_low, precision: 10, scale: 2
      t.date        :week_52_low_date
      t.string      :logo_url

      t.boolean     :current
      t.timestamps
    end

    ##
    # Positions are represents users portfolio. It can contain
    # multiple items: stocks(stocks or ETFs, index funds) or Cryptos.
    # Insted of having multiple items like in old implementation, this time
    # only 1 record will be used per share/crypto/etf. When pucrchacing more
    # shares update only shares and average_price. It will simplify
    # recording process.
    create_table    :x_positions do |t|
      t.references  :user, null: false, foreign_key: true

      t.references  :x_stocks, null: true, foreign_key: true
      t.references  :x_cryptos, null: true, foreign_key: true

      t.decimal     :shares, precision: 12, scale: 4
      t.decimal     :average_price, precision: 10, scale: 2
      t.decimal     :total_cost, precision: 10, scale: 2
      t.decimal     :market_price, precision: 10, scale: 2
      t.decimal     :market_value, precision: 10, scale: 2
      t.decimal     :gain_loss, precision: 10, scale: 2
      t.decimal     :gain_loss_pct, precision: 10, scale: 2
      t.decimal     :est_annual_dividend, precision: 12, scale: 4
      t.decimal     :est_annual_income, precision: 12, scale: 4
      t.string      :note

      t.boolean     :current
      t.timestamps
    end


    ##
    # https://iexcloud.io/docs/api/#company
    # GET /stock/{symbol}/company
    create_table    :x_companies do |t|
      t.references  :x_stocks, foreign_key: true

      t.string      :name
      t.string      :exchange
      t.string      :industry
      t.string      :website
      t.text        :description
      t.string      :ceo
      t.string      :security_name
      t.string      :issueType
      t.string      :sector
      t.integer     :primary_sic_code
      t.integer     :employees
      t.string      :tags, array: true, default: []
      t.string      :address
      t.string      :address2
      t.string      :state
      t.string      :city
      t.string      :zip
      t.string      :country
      t.string      :phone

      t.boolean     :current
      t.timestamps
    end

    ##
    # https://api.coinpaprika.com/#tag/Coins
    # GET https://api.coinpaprika.com/v1/coins/btc-bitcoin
    create_table    :x_crypto_projects do |t|
      t.references  :x_cryptos, foreign_key: true

      t.string      :crypto_id
      t.string      :name
      t.string      :type
      t.string      :parent
      t.integer     :rank
      t.text        :description
      t.boolean     :open_source
      t.string      :tags, array: true, default: []
      t.string      :hash_algorithm

      t.boolean     :current
      t.timestamps
    end

    ##
    # https://iexcloud.io/docs/api/#dividends-basic
    # GET /stock/{symbol}/dividends/{range}
    create_table    :x_dividends do |t|
      t.references  :x_stocks, foreign_key: true

      t.decimal     :amount, precision: 10, scale: 2
      t.string      :currency
      t.date        :declared_date
      t.text        :description
      t.date        :ex_date
      t.string      :flag
      t.string      :frequency
      t.date        :payment_date
      t.date        :record_date
      t.integer     :refid
      t.string      :divid
      t.string      :divkey
      t.string      :subkey
      t.integer     :market_date
      t.integer     :marker_updated

      t.boolean     :current
      t.timestamps
    end
  end
end
