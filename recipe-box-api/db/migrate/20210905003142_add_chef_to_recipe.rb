class AddChefToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipe, :chef, :integer
  end
end
