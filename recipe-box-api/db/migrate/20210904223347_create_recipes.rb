class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.integer :cook_time
      t.integer :serving
      t.integer :like_counter
      t.string :video_url

      t.timestamps
    end
  end
end
