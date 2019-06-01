class RemovePositionFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :position, :integer
  end
end
