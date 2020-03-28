class CreateIncomes < ActiveRecord::Migration[6.0]
  def change
    create_table :incomes do |t|
      t.string :source_name
      t.decimal :monthly_income
      t.decimal :year_income
      t.text :notes
      t.boolean :current

      t.timestamps
    end
  end
end
