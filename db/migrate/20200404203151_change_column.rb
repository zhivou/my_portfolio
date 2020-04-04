class ChangeColumn < ActiveRecord::Migration[6.0]
  def change
    change_table :stocks do |t|
      t.change :purchase_date, :datetime
    end
  end
end
