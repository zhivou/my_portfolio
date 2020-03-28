class CreateLoans < ActiveRecord::Migration[6.0]
  def change
    create_table :loans do |t|
      t.string :org_name
      t.integer :months
      t.decimal :apr
      t.decimal :amount
      t.date :maturity_date
      t.decimal :maturity_amount
      t.decimal :monthly_payment
      t.boolean :current
      t.text :notes

      t.timestamps
    end
  end
end
