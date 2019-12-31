class AddSortToExperience < ActiveRecord::Migration[6.0]
  def change
    add_column :experiences, :sort, :integer
  end
end
