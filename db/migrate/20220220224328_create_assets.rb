class CreateAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :assets do |t|
      t.string  :name
      t.decimal :count
      t.decimal :amount
      t.string  :location_url
      t.string  :credentials
      t.text    :notes

      t.boolean :current
      t.references  :financial_type, null: false
      t.timestamps
    end
  end
end

