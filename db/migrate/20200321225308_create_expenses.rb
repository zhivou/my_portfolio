class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.decimal :monthly_payment
      t.boolean :current
      t.text :notes
      t.decimal :year_amount

      t.timestamps
    end
  end
end
