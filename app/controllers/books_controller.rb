class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    render json: Book.all
  end

  def show
    book = Book.find(params[:id])

    if book
      render json: book
    end
  end

  def create
    book = Book.create!(book_params)
    render json: book, status: :created
  end

  def update
    book = Book.find(params[:id])

    book.update!(book_params)

    render json: book
  end

  def destroy
    book = Book.find_by(id: params[:id])

    if book
      book.destroy
      head :no_content
    end
  end

  private

  def book_params
    params.permit(:title, :author, :genre, :image_url, :description)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Bird not found" }, status: :not_found
  end
end
