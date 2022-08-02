class BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def show
    book = Book.find_by(id: params[:id])

    if book
      render json: book
    else
      render json: { error: "Book not found" }, status: :not_found
    end
  end

  def create
    book = Book.create!(book_params)
    render json: book, status: :created
  end

  def update
    book = Book.find(params[:id])

    book.update!(book_params)
  end

  private

  def book_params
    params.permit(:title, :author, :genre, :image_url, :description)
  end
end
