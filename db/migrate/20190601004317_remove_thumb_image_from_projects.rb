class RemoveThumbImageFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :thumb_image, :string
  end
end
