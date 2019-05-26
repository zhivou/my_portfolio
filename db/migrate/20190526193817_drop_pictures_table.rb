class DropPicturesTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :pictures
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
