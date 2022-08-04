class Book < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, length: { minimum: 2 }, presence: true
  validates :author, presence: true
  validates :description, length: { minimum: 10 }
end
