class AddPurchaseDateToStocks < ActiveRecord::Migration[6.0]
  def change
    add_column :stocks, :purchase_date, :date
  end
end
