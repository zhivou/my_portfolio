class Blog < ApplicationRecord
  #has_many :pictures
  has_many_attached :images

  validates_presence_of :title, :body
end
