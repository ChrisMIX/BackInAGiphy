class Gif < ActiveRecord::Base
  has_many :favorites
  belongs_to :user
end
