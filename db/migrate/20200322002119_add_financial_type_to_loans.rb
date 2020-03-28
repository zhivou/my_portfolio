class AddFinancialTypeToLoans < ActiveRecord::Migration[6.0]
  def change
    add_reference :loans, :financial_type, null: false, foreign_key: true
  end
end
