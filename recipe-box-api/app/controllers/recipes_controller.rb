class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
       # render json: recipes
       render json: recipes.to_json(:include => {
            :chef=>{:only => [:name]},
       }, except: [:created_at, :updated_at])
    end
    def show
        recipe = Recipe.find(params[:id])

        render json: recipe.to_json(:include => {
            :chef=>{:only => [:name]},
       }, except: [:created_at, :updated_at])
      end
end
