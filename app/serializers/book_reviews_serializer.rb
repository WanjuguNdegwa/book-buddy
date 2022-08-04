class BookReviewsSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_details
  
  def user_details
    { id: self.object.user.id, email: self.object.user.email }
  end
end
