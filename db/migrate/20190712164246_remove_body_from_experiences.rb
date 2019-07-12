class RemoveBodyFromExperiences < ActiveRecord::Migration[6.0]
  def change
    remove_column :experiences, :body, :text
  end
end
