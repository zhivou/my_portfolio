class AddPhotoToPhotoSection < ActiveRecord::Migration[6.0]
  def change
    add_reference :photo_sections, :photo, null: false, foreign_key: true
  end
end
