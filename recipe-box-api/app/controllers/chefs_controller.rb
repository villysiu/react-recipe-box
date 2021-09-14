class ChefsController < ApplicationController
    def index
        chefs = Chef.all
        render json: chefs, except: [:created_at, :updated_at]
    end
    def show
        chef = Chef.find(params[:id])
       
        render json: chef.to_json(:include => {
            :recipes=>{:only => [:name]},
           }, except: [:created_at, :updated_at])
      end

      def create
        chef = Chef.create(chef_param)
        render json: chef
      end
    
      def update
        chef = Chef.find(params[:id])
        chef.update_attributes(chef_param)
        render json: chef
      end
    
      def destroy
        chef = Chef.find(params[:id])
        chef.destroy
        head :no_content, status: :ok
      end
      
      private
        def chef_param
          params.require(:chef).permit(:name)
        end

end
