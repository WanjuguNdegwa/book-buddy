class ChangeRatingToIntegerInReviews < ActiveRecord::Migration[6.1]
  def up
    change_column :reviews, :rating, :integer, using: 'rating::integer'
  end

  def down
    change_column :reviews, :rating, :string, using: 'rating::string'
  end
end
