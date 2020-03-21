class CreateBadgets < ActiveRecord::Migration[6.0]
  def change
    create_table :badgets do |t|
      t.string :name
      t.decimal :monthly_payment
      t.integer :months_left
      t.boolean :current
      t.decimal :amount
      t.text :notes

      t.timestamps
    end
  end
end
