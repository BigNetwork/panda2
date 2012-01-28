class CreateAnnouncements < ActiveRecord::Migration
  def change
    create_table :announcements do |t|
      t.string :name
      t.datetime :created_at
      t.integer :position

      t.timestamps
    end
  end
end
