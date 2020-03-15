class CreateManagerJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :manager_jobs do |t|
      t.string :organization
      t.string :title
      t.string :url
      t.boolean :interview
      t.boolean :replayed
      t.text :notes
      t.string :address

      t.timestamps
    end
  end
end
