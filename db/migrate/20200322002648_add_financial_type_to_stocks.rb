class AddFinancialTypeToStocks < ActiveRecord::Migration[6.0]
  def change
    add_reference :stocks, :financial_type, null: false, foreign_key: true
  end
end
