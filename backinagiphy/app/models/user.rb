class User < ActiveRecord::Base
  has_many :favorites
  has_many :gifs, through: :favorites
  has_secure_password
end
