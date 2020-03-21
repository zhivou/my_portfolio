class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :name
      t.decimal :price
      t.boolean :current
      t.text :notes
      t.date :sold_date
      t.decimal :sold_price
      t.decimal :gain_loss

      t.timestamps
    end
  end
end
