class CreateExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :organization
      t.text :body
      t.date :date_started
      t.string :date_ended
      t.string :location

      t.timestamps
    end
  end
end
