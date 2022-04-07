class CreateXTables < ActiveRecord::Migration[6.1]
  def change
    create_table :x_tables do |t|

      t.timestamps
    end
  end
end
