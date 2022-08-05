class ReviewsController < ApplicationController
  def index
    if params[:book_id]
      book = Book.find_by(id: params[:book_id])

      if book
        render json: book.reviews
      else
        render json: { error: "Book not found" }, status: :not_found
      end
    else
      render json: Review.all, include: [:user]
    end
  end

  def create
    review = Review.new(review_params)
    book = Book.find_by(id: params[:book_id])
    user = @current_user

    if user
      review.user = user
    else
      return render json: { error: "User not found" }, status: :not_found
    end

    if book
      review.book = book
    else
      return render json: { error: "Book not found" }, status: :not_found
    end

    review.save!
    render json: review, status: :created
    
  end

  private

  def review_params
    params.permit(:rating, :comment, :user_id)
  end

end
