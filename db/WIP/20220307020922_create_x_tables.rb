class CreateXTables < ActiveRecord::Migration[6.1]
  def change
    create_table    :x_stocks do |t|
      t.references  :brokers, foreign_key: true

      t.string      :symbol, null: false
      t.string      :company_name
      t.string      :industry
      t.string      :website
      t.text        :description
      t.string      :ceo
      t.string      :security_name
      t.string      :issue_type
      t.string      :sector
      t.integer     :primary_sic_code
      t.integer     :employees
      t.string      :address
      t.string      :address2
      t.string      :state
      t.string      :city
      t.string      :zip
      t.string      :country
      t.string      :phone
      t.date        :ipo
      t.string      :logo
      t.string      :peers

      t.decimal     :outstanding_shares, precision: 16, scale: 0
      t.decimal     :market_capitalization, precision: 20, scale: 0

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

      t.timestamps
    end

    create_table    :brokers do |t|
      t.string      :name, null: false
      t.string      :location_url
      t.string      :credentials
      t.text        :notes

      t.datetime    :created_at, null: false
    end

    create_table    :positions do |t|
      t.references  :user, null: false, foreign_key: true
      t.references  :x_stock, null: true, foreign_key: true
      t.references  :x_crypto, null: true, foreign_key: true

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

      t.index %i[user_id stock_id], unique: true
    end

    create_table    :x_cryptos do |t|
      t.string      :name
      t.string      :symbol
      t.decimal     :price, precision: 10, scale: 2
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
    end
  end
end
