class CreateWidgetImages < ActiveRecord::Migration[6.1]
  def change
    create_table :widget_images do |t|
      t.string :wid_name

      t.timestamps
    end
  end
end
