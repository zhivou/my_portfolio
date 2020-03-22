class AddFinancialTypeToIncomes < ActiveRecord::Migration[6.0]
  def change
    add_reference :incomes, :financial_type, null: false, foreign_key: true
  end
end
