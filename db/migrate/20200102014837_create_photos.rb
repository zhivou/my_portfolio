class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :name
      t.width :integer
      t.height :integer

      t.timestamps
    end
  end
end
