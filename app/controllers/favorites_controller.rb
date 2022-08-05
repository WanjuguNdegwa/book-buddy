class FavoritesController < ApplicationController
  def index
    if params[:user_id]
      user = User.find_by(id: params[:user_id])

      if user
        render json: user.books
      else
        render json: { error: "User not found" }, status: :not_found
      end
    else
      render json: Favorite.all, include: [:user]
    end
  end

  def create
    favorite = Favorite.new()
    book = Book.find_by(id: params[:book_id])
    user = User.find_by(id: params[:user_id])

    if user
      favorite.user = user
    else
      return render json: { error: "User not found" }, status: :not_found
    end

    if book
      favorite.book = book
    else
      return render json: { error: "Book not found" }, status: :not_found
    end

    favorite.save!
    render json: favorite, status: :created
  end

  def destroy
    user = User.find_by(id: params[:user_id])
    Favorite.delete(Favorite.where(book_id: params[:book_id], user_id: user.id))
    
    head :no_content
  end

  
end
