class CreateEducations < ActiveRecord::Migration[5.1]
  def change
    create_table :educations do |t|
      t.string :school
      t.string :degree
      t.date :date_ended

      t.timestamps
    end
  end
end
