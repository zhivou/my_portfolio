class RemoveMainImageFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :main_image, :string
  end
end
