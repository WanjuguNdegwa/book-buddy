class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :favorites
  has_many :books, through: :favorites
end
