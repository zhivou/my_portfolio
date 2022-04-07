class DropXCompanies < ActiveRecord::Migration[6.1]
  def change
    drop_table :x_positions
    drop_table :x_stocks
    drop_table :x_cryptos
    drop_table :x_crypto_projects
    drop_table :x_companies
    drop_table :x_dividends
  end
end
