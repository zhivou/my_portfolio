class Blog < ApplicationRecord
  has_one_attached :main_image
  has_rich_text :body_area

  has_many :tags, inverse_of: :blog

  validates_presence_of :title, :body_area

  accepts_nested_attributes_for :tags, allow_destroy: true

  ##
  # Returns Blogs with particular description name
  #
  def self.get_blogs_with_tag(tag_name)
    self.where(:description)
  end
end
