class CreateMainSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :main_skills do |t|
      t.string :name
      t.integer :percent
      t.boolean :hard, :default => false

      t.timestamps
    end
  end
end
