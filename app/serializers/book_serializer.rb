class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url, :description, :average_rating
  has_many :reviews, serializer: BookReviewsSerializer
  has_many :users

  def average_rating
    if self.object.reviews.count > 0
      self.object.reviews.average(:rating).round(2)
    else
      0
    end
  end
end
