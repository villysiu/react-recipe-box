class ChangeChefInRecipe < ActiveRecord::Migration[6.1]
  def change
    rename_column :recipes, :chef, :chef_id
  end
end
