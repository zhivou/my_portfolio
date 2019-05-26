class Blog < ApplicationRecord
  #has_many :pictures
  has_one_attached :main_image
  has_many_attached :images
  has_rich_text :body_area

  validates_presence_of :title, :body
end
