class Book < ApplicationRecord
  has_many :reviews
  has_many :favorites
  has_many :users, through: :favorites

  validates :title, length: { minimum: 2 }, presence: true
  validates :author, presence: true
  validates :description, length: { minimum: 10 }
end
