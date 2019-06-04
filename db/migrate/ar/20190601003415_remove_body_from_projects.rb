class RemoveBodyFromProjects < ActiveRecord::Migration[6.0]
  def change
    remove_column :projects, :body, :text

  end
end
