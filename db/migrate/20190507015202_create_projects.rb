class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :body
      t.string :main_image
      t.string :thumb_image
      t.integer :position

      t.timestamps
    end
  end
end
