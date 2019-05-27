class Blog < ApplicationRecord
  has_one_attached :main_image
  has_rich_text :body_area

  has_many :tags, inverse_of: :blog

  validates_presence_of :title, :body_area

  accepts_nested_attributes_for :tags, allow_destroy: true
end
