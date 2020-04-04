class ChangeColumnSoldDateToDatetime < ActiveRecord::Migration[6.0]
  def change
    change_table :stocks do |t|
      t.change :sold_date, :datetime
    end
  end
end
