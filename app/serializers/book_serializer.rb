class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url, :description
  has_many :reviews, serializer: BookReviewsSerializer
end
